//Pulled from https://gist.githubusercontent.com/EnetoJara/331960fbb8744abca3d7dd600a28e829/raw/5df1bd691b382f87861d8a9a3275e988215e2941/axios.ts
import axios, { AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from "axios";

export class Axios {
   public interceptors: {
        /**
         * The **Request** interceptor will be called right before the `http request`
         * @summary
         * This a useful method especially if you need to send a token on each request.
         */
        request: AxiosInterceptorManager<AxiosRequestConfig>;
        /**
         * The **Response** interceptor will be called right before the `http request` is received.
         * @summary
         * This a useful method especially if you need to send a token on each request.
         */
        response: AxiosInterceptorManager<AxiosResponse>;
    };
    constructor(config: AxiosRequestConfig) {
        return axios.create(config);
    }
}