import styled from 'styled-components';

const Header = () => {
    return (
        <>
            <MainHeader>
                <a href='/'>JUST:Q</a>
            </MainHeader>
        </>
    );
};

export default Header;

const MainHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    background-color: rgb(30, 173, 142);
    font-size: 20px;
    a {
        color: white;
        text-decoration: none;
    }
`;
