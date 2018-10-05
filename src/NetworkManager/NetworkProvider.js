import axios from "axios";
import configuration from "../Utils/Config"

const NetworkProvider = axios.create({
    baseURL: configuration.baseUrl
});

NetworkProvider.all = axios.all;

export default NetworkProvider;



