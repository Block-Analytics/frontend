import axios, { AxiosHeaders, AxiosRequestConfig } from "axios"
import {AxiosError, AxiosResponse} from "axios";
import router from "@/router"
import { useNotification } from 'naive-ui'

const backendConnector = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL+'',
    headers: {
        "Content-Type": "application/json",
    },
})

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[response error] [${JSON.stringify(error)}]`);
    if (!error.response) {
        //notify.warn('Network/Server error');
        console.error('**Network/Server error');
        console.log(error.response);
        return Promise.reject(error);
    }
    switch (error.response.status) {
        case 400:
          console.error(error.response.status, error.message);
          break;
    
        case 401:
          console.error(error.response.status, error.message);
          break;
    }
    return Promise.reject(error);
}

// backendConnector.interceptors.request.use(onRequest, null)
backendConnector.interceptors.response.use(null, onResponseError);

export default backendConnector