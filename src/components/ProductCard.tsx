import styled from 'styled-components';
import * as Type from 'types/products';

const ProductCard = ({product_name, price, main_image, keywords}: Type.productData) => {
    const keywordList = keywords?.[0].split(';') || [];

    return (
        <>
            <Card>
                <Box>
                    <Image src={main_image} alt='asdfsdf' />
                    <CardBody>
                        <CardTitle>{product_name}</CardTitle>
                        {keywordList.map((keyword, index) => (
                            <span key={index}>#{keyword} </span>
                        ))}
                    </CardBody>
                </Box>
                <CardFooter>
                    <CardPrice>\ {Number(price).toLocaleString()}</CardPrice>
                    <Button>바로 가기</Button>
                </CardFooter>
            </Card>
        </>
    );
};

export default ProductCard;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border: 1px solid lightgray;
    border-radius: 10px;
    overflow: hidden;
    &:hover {
        box-shadow: 2px 2px 10px lightgray;
    }
    padding: 1rem;
    margin: 0.5rem;
`;

const Box = styled.div`
    position: relative;
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: auto;
`;
const CardTitle = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin: 10px 0;
    line-height: 1.3;
`;
const CardBody = styled.div`
    padding: 10px 5px;
`;

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
`;
const CardPrice = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
`;

const Button = styled.button`
    background: #789bfb;
    color: white;
    &:hover {
        cursor: pointer;
        background: #789bfbb5;
    }
    border: none;
    border-radius: 10px;
    width: 80px;
    height: 30px;
`;
