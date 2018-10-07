import Dispatcher from "../Redux/actions/Dispatcher";
import { GET_USER_DETAILS, GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_ERROR, ON_LOGOUT, CLEAR_PLANETS_DETAILS } from "../Redux/actions/types";
import NetworkManager from "../NetworkManager/NetworkManager";
import configuration from '../Utils/Config';
class LoginService {

    login = (name, birth) => {
        localStorage.removeItem('user');
        NetworkManager.getAPI(`${configuration.baseUrl}${configuration.loginUrl}`)
            .then((response) => {
                // TODO:: data processing
                const userDetails = response.data.results;
                userDetails.map(users => {
                    if(users.name == name && users.birth_year == birth) {
                        localStorage.setItem('user',users.name);
                        Dispatcher.dispatchEvents(GET_USER_DETAILS_SUCCESS, {payload:users,title:'Welcome',message:users.name});
                    } 
                })
                if(localStorage.getItem('user') === null){
                    Dispatcher.dispatchEvents(GET_USER_DETAILS_ERROR, {payload:'', title:'Login Fails',message:'Invalid credentials'});
                }
                
            })
            .catch((e) => {
                console.log(e);
                Dispatcher.dispatchEvents(GET_USER_DETAILS_ERROR, {payload:'',title:'API Fails',message:'Api failure'});
            });
    }

    logout = () => {
        localStorage.removeItem('user');
        Dispatcher.dispatchEvents(ON_LOGOUT, {payload:'',title:'Logout',message:'Logout Successfully'});
        Dispatcher.dispatchEvents(CLEAR_PLANETS_DETAILS, {payload:'',title:'',message:''});
    }
}

const LoginServiceInst = new LoginService()
export default LoginServiceInst;