import NetworkProvider from "./NetworkProvider";

class NetworkManagerClass {

    constructor() {
        this.http = NetworkProvider;
    }
    
    getAPI(path, params={}, reqHeaders={}) {
        return this.http.get(path, {params: params, headers: reqHeaders});
    }

    postAPI(path, data, reqHeaders={}) {
        return this.http.post(path, data, {headers: reqHeaders});
    }
}

const NetworkManager = new NetworkManagerClass();

export default NetworkManager;