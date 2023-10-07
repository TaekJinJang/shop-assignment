import {httpClient} from './instance';
import * as Type from 'types/products';

const PATH = 'data';

export const getProductInfo = async (page: number, perPage: number): Promise<Type.ResponseData> => {
    const response = await httpClient.get<Type.ResponseData>(PATH, {
        params: {
            _page: page,
            _limit: perPage,
        },
    });

    return response.data;
};
