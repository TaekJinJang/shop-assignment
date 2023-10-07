import {getProductInfo} from 'apis/productInfo';
import useFetch from 'hooks/useFetch';
import styled from 'styled-components';

const Home = () => {
    const {state} = useFetch(getProductInfo);
    console.info(state);
    return (
        <Container>
            <div>test</div>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
`;
