import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {BASE_URL} from 'constants/constants';

interface CustomInstance extends AxiosInstance {
    get<T = unknown, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
}

const httpClient: CustomInstance = axios.create({
    baseURL: BASE_URL,
});

export {httpClient};
