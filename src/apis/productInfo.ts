import {httpClient} from './instance';
import * as Type from 'types/products';

const DB_JSON_PATH = 'db.json';

export const getProductInfo = async () => {
    const response = await httpClient.get<Type.ResponseData>(DB_JSON_PATH);
    return response.data;
};
