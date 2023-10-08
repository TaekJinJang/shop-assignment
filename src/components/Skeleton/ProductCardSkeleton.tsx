import {Card} from 'components/ProductCard';
import {SKELETON_COLOR} from 'constants/constants';
import styled from 'styled-components';

const ProductCardSkeleton = () => {
    return (
        <Skeleton>
            <div className='CardBody'>
                <div className='Image'></div>
                <div className='CardTitle'></div>
            </div>

            <div className='CardFooter'>
                <div className='CardPrice'></div>
                <button className='CardButton'></button>
            </div>
        </Skeleton>
    );
};

export default ProductCardSkeleton;

const Skeleton = styled(Card)`
    @keyframes shine {
        0% {
            opacity: 1;
        }

        50% {
            opacity: 0.5;
        }

        100% {
            opacity: 1;
        }
    }
    animation: shine 1s ease-in-out infinite;
    div {
        border-radius: 6px;
    }
    .CardBody {
        .Image {
            height: 230px;
            background-color: ${SKELETON_COLOR};
        }
        .CardTitle {
            height: 70px;

            background-color: ${SKELETON_COLOR};
        }
    }
    .CardFooter {
        .CardPrice {
            width: 100px;
            height: 30px;
            background-color: ${SKELETON_COLOR};
        }
    }
`;
