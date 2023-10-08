import {getProductInfo} from 'apis/productInfo';
import {ITEMS_COUNT_PER_PAGE} from 'constants/constants';
import useFetch from 'hooks/useFetch';
import {useCallback, useEffect, useState} from 'react';
import Pagination from 'react-js-pagination';
import * as S from 'styles/pagination';
import * as Type from 'types/products';
import SelectBox from './SelectBox';

const ProductList = () => {
    const [page, setPage] = useState<number>(1); // 현재 페이지 번호
    const [perPage, setPerPage] = useState<number>(10);
    const [items, setItems] = useState<Type.ResponseData>({
        totalCount: 0,
        data: [],
    });
    const fetchProductInfo = useCallback(() => getProductInfo(page, perPage), [page, perPage]);
    const {data: itemStates, isLoading, error} = useFetch(fetchProductInfo);

    const handlePageChange = (page: number) => {
        setPage(page);
    };
    const handleSelectBox = (value: number) => {
        console.info(value);
        setPerPage(value);
    };
    useEffect(() => {
        if (itemStates) {
            setItems({totalCount: itemStates.totalCount, data: itemStates.data});
        }
    }, [itemStates]);
    console.info('page:', page, setPerPage, 'fetch:', itemStates, isLoading, error);

    return (
        <>
            {itemStates && (
                <>
                    {items.data.map(item => {
                        return <div>{item.id}</div>;
                    })}
                    {
                        <SelectBox
                            options={ITEMS_COUNT_PER_PAGE}
                            handleSelectBox={handleSelectBox}
                            initialValue={10}
                        />
                    }
                    <S.WrapPagination>
                        <Pagination
                            activePage={page}
                            itemsCountPerPage={perPage}
                            totalItemsCount={items.totalCount}
                            prevPageText={'‹'}
                            nextPageText={'›'}
                            onChange={handlePageChange}
                        />
                    </S.WrapPagination>
                </>
            )}
        </>
    );
};

export default ProductList;
