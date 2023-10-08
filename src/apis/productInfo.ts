import {httpClient} from './instance';
import * as Type from 'types/products';

const PATH = 'product';

export const getProductInfo = async (page: number, perPage: number): Promise<Type.ResponseData> => {
    const response = await httpClient.get<Type.productData[]>(PATH, {
        params: {
            _page: page,
            _limit: perPage,
        },
    });
    const totalCount = parseInt(response.headers['x-total-count'], 10);

    return {data: response.data, totalCount};
};
