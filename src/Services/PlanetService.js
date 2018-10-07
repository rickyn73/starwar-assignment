import Dispatcher from "../Redux/actions/Dispatcher";
import { GET_PLANETS_DETAILS, GET_PLANETS_DETAILS_SUCCESS, GET_PLANETS_DETAILS_ERROR } from "../Redux/actions/types";
import NetworkManager from "../NetworkManager/NetworkManager";
import configuration from '../Utils/Config';
import { multisort } from '../utils/SortUtility';
class PlanetService {

    planet = () => {
        NetworkManager.getAPI(`${configuration.baseUrl}${configuration.planetUrl}`)
            .then((response) => {
                // TODO:: data processing
                let planetDetails = response.data.results;
                planetDetails = multisort(planetDetails, ['population'], ['DESC'])
                Dispatcher.dispatchEvents(GET_PLANETS_DETAILS_SUCCESS, {payload:planetDetails,title:'Welcome',message:'success'});
            })
            .catch((e) => {
                console.log(e);
                Dispatcher.dispatchEvents(GET_USER_DETAILS_ERROR, {payload:'',title:'API Fails',message:'Api failure'});
            });
    }

    planetByName = (name) => {
        NetworkManager.getAPI(`${configuration.baseUrl}${configuration.planetUrl}${configuration.planetSearch}${name}`)
            .then((response) => {
                // TODO:: data processing
                let planetDetails = response.data.results;
                planetDetails = multisort(planetDetails, ['population'], ['DESC'])
                Dispatcher.dispatchEvents(GET_PLANETS_DETAILS_SUCCESS, {payload:planetDetails,title:'Welcome',message:'success'});
            })
            .catch((e) => {
                console.log(e);
                Dispatcher.dispatchEvents(GET_PLANETS_DETAILS_ERROR, {payload:'',title:'API Fails',message:'Api failure'});
            });
    }
}

const PlanetServiceInst = new PlanetService()
export default PlanetServiceInst;