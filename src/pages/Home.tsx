import ProductList from 'components/ProductList';
import Header from 'components/common/Header';
import styled from 'styled-components';

const Home = () => {
    return (
        <Container>
            <Header />
            <ProductList />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
