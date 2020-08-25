import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import Sign from '../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #299b01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Login = styled.button`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    text-transform: uppercase;
    font-family: Roboto;
    font-size: 16px;
    :hover {
        background-color: #7b84c3;
        border-radius: 10px;
    }
    :active {
        background-color: #836dc7;
    }
`;

const LoginImg = styled.img`
    margin-bottom: 5px;
    align-self: center;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrDonald's</H1>
        </Logo>
        <Login>
            <LoginImg src={Sign} alt="user"/>
            Войти
        </Login>
    </NavBarStyled>
);
