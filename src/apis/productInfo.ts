import {httpClient} from './instance';

const DB_JSON_PATH = 'mock/data.json';

export const getProductInfo = async () => {
    const response = await httpClient.get(DB_JSON_PATH);
    return response.data;
};
