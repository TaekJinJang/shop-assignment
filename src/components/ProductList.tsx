import {getProductInfo} from 'apis/productInfo';
import useFetch from 'hooks/useFetch';
import {useState} from 'react';
import Pagination from 'react-js-pagination';
import * as S from 'styles/pagination';
const ProductList = () => {
    const {state: fetchStates} = useFetch(getProductInfo);
    const {data: items, isLoading, error} = fetchStates;
    const [page, setPage] = useState<number>(1); // 현재 페이지 번호
    const handlePageChange = (page: number) => {
        setPage(page);
    };
    console.info('page:', page, 'fetch:', items, isLoading, error);

    return (
        <>
            <div>test</div>
            <S.WrapPagination>
                <Pagination
                    activePage={page}
                    itemsCountPerPage={5}
                    totalItemsCount={500}
                    pageRangeDisplayed={5}
                    prevPageText={'‹'}
                    nextPageText={'›'}
                    onChange={handlePageChange}
                />
            </S.WrapPagination>
        </>
    );
};

export default ProductList;
