import Dispatcher from "../Redux/actions/Dispatcher";
import {GET_LOCATION_LIST} from "../Redux/actions/types";
import NetworkManager from "../NetworkManager/NetworkManager";

class LocationService {

    getLocationGata = () => {
        NetworkManager.getAPI("users?page=2")
        .then((response)=> {
            // TODO:: data processing
            Dispatcher.dispatchEvents(GET_LOCATION_LIST, response.data.data);
        })
        .catch((e)=> {

        })
        
    }
    
    // TODO:: business logic goes here.
    validate = () => {

    }
}

const LocationServiceInst = new LocationService()
export default LocationServiceInst;