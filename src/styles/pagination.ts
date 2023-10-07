import styled from 'styled-components';

export const WrapPagination = styled.div`
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        margin: 50px auto;

        li {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid #e3e3e3;
            background-color: #ffffff;
            transition: all 1s;

            &:hover,
            &:active,
            &.active {
                background-color: #337ab7;
                a {
                    color: #ffffff;
                }
            }

            &:nth-child(1),
            &:nth-child(2),
            &:nth-last-child(1),
            &:nth-last-child(2) {
                a {
                    font-size: 20px;
                    margin-top: -2px;
                }
            }

            a {
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration-line: none;
                width: 100%;
                height: 100%;
                font-size: 12px;
            }
        }
    }
`;
