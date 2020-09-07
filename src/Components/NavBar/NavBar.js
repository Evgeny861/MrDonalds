import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import Sign from '../../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
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
    padding: 0;
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
const User = styled.div`
    display: flex;
    align-items: center;
    text-align:center; 
`;

const LogOut = styled.span`
    font-size: 20px;
    font-weight: 700px;
    cursor: pointer;
    margin-right: 30px;
`;
const Figure = styled.figure`
    margin: 0 30px;
`;

export const NavBar = ({ authentication, logIn, logOut }) => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrDonald's</H1>
        </Logo>
        {authentication ?
        <User>
            <Figure>
                <LoginImg src={Sign} alt={authentication.displayName}/>
                <figcaption>{authentication.displayName}</figcaption>
            </Figure>
            <LogOut title="Выйти" onClick={logOut}>Х</LogOut> 
        </User> :
        <Login onClick={logIn}>
            <Figure>
                <LoginImg src={Sign} alt="user"/>
                <figcaption>Войти</figcaption>
            </Figure>
        </Login>
        }
    </NavBarStyled>
);
