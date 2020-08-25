import React from 'react';
import styled from 'styled-components';
import BannerImg from '../image/banner.png'

const Div = styled.div`
    background-image: ${({ props }) => `url(${ props })`};
    height: 200px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
`;

export const Banner = (props) => (
    <Div props={BannerImg}/>
)