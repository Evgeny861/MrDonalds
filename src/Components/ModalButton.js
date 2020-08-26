import styled from 'styled-components';

export const Button = styled.button`
    background-color: #299B01;
    border-radius: 15px;
    width: 250px;
    height: 65px;
    margin: auto;
    outline: none;
    border: none;

    &:hover {
        background-color: #248103;
    }

    &:active {
        background-color: #1ba653;
    }
`;