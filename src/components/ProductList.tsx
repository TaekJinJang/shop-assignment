import {getProductInfo} from 'apis/productInfo';
import {ITEMS_COUNT_PER_PAGE} from 'constants/constants';
import useFetch from 'hooks/useFetch';
import {useCallback, useEffect, useState} from 'react';
import Pagination from 'react-js-pagination';
import * as S from 'styles/pagination';
import * as Type from 'types/products';
import SelectBox from './common/SelectBox';
import useQuerystring from 'hooks/useQueryString';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import ProductCardSkeleton from './Skeleton/ProductCardSkeleton';
import NotFound from 'pages/NotFound';

const ProductList = () => {
    const [page, setPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(10);
    const [items, setItems] = useState<Type.ResponseData>({
        totalCount: 0,
        data: [],
    });

    const fetchProductInfo = useCallback(() => getProductInfo(page, perPage), [page, perPage]);
    const {data: itemStates, isLoading, error} = useFetch(fetchProductInfo);
    const {getQuery, addQuery} = useQuerystring();

    const handlePageChange = (page: number) => {
        addQuery('page', page.toString());
    };
    const handleSelectBox = (perPage: number) => {
        addQuery('perPage', perPage.toString());
    };
    useEffect(() => {
        if (itemStates) {
            setItems({totalCount: itemStates.totalCount, data: itemStates.data});
        }
    }, [itemStates]);

    const pageParam = getQuery('page');
    const perPageParam = getQuery('perPage');
    if (pageParam && Number(pageParam) !== page) setPage(() => Number(pageParam));
    if (perPageParam && Number(perPageParam) !== perPage) setPerPage(() => Number(perPageParam));

    return (
        <>
            <Container>
                <ProductHeader>상품 정보</ProductHeader>
                <SelectBoxContainer>
                    <SelectBox
                        options={ITEMS_COUNT_PER_PAGE}
                        handleSelectBox={handleSelectBox}
                        initialValue={perPage}
                    />
                </SelectBoxContainer>

                {itemStates && (
                    <>
                        <ProductContainer>
                            {items.data.map(item => {
                                return <ProductCard key={item.id} {...item} />;
                            })}
                        </ProductContainer>

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
                {isLoading && (
                    <>
                        <ProductContainer>
                            {Array.from({length: perPage}).map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))}
                        </ProductContainer>
                    </>
                )}
                {error && (
                    <ErrorContainer>
                        <NotFound errorStatus={'데이터 불러오기 실패'} />
                    </ErrorContainer>
                )}
            </Container>
        </>
    );
};

export default ProductList;
const Container = styled.div`
    width: 1200px;
`;
const ProductHeader = styled.header`
    font-size: 40px;
    font-weight: 700;
    margin: 20px 0px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;
const SelectBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px;
    margin-left: auto;
    height: 30px;
    width: 100px;
`;

const ErrorContainer = styled.div`
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
