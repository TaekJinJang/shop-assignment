import {getProductInfo} from 'apis/productInfo';
import {TOTAL_ITEMS} from 'constants/constants';
import useFetch from 'hooks/useFetch';
import {useCallback, useState} from 'react';
import Pagination from 'react-js-pagination';
import * as S from 'styles/pagination';
// import {ResponseData} from 'types/products';

const ProductList = () => {
    const [page, setPage] = useState<number>(1); // 현재 페이지 번호
    const [perPage, setPerPage] = useState<number>(10);

    const fetchProductInfo = useCallback(() => getProductInfo(page, perPage), [page, perPage]);
    const {data: itemState, isLoading, error} = useFetch(fetchProductInfo);

    const handlePageChange = (page: number) => {
        setPage(page);
    };
    console.info('page:', page, setPerPage, 'fetch:', itemState, isLoading, error);

    return (
        <>
            {/* {itemStates && {itemStates.d.map(()=>{

            })}} */}
            <div>test</div>
            <S.WrapPagination>
                <Pagination
                    activePage={page}
                    itemsCountPerPage={perPage}
                    totalItemsCount={TOTAL_ITEMS}
                    prevPageText={'‹'}
                    nextPageText={'›'}
                    onChange={handlePageChange}
                />
            </S.WrapPagination>
        </>
    );
};

export default ProductList;
