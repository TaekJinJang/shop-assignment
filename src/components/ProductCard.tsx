import styled from 'styled-components';
import * as Type from 'types/products';

const ProductCard = ({product_name, price, main_image, keywords}: Type.productData) => {
    const keywordList = keywords?.[0].split(';') || [];

    return (
        <>
            <Card>
                <div className='CardBody'>
                    <img className='Image' src={main_image} alt='asdfsdf' />
                    <h1 className='CardTitle'>{product_name}</h1>
                    {keywordList.map((keyword, index) => (
                        <span key={index}>#{keyword} </span>
                    ))}
                </div>

                <div className='CardFooter'>
                    <div className='CardPrice'>\ {Number(price).toLocaleString()}</div>
                    <button className='CardButton'>바로 가기</button>
                </div>
            </Card>
        </>
    );
};

export default ProductCard;

export const Card = styled.div`
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

    .CardBody {
        padding: 10px 5px;
        .Image {
            object-fit: cover;
            width: 100%;
            height: auto;
        }
        .CardTitle {
            font-size: 20px;
            font-weight: 700;
            margin: 10px 0;
            line-height: 1.3;
        }
    }
    .CardFooter {
        padding: 0px 5px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;
        .CardPrice {
            font-size: 1.2rem;
            font-weight: 700;
        }
        .CardButton {
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
        }
    }
`;
