import React from 'react';
import styled from 'styled-components';
import { Button } from '../Style/ModalButton';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { formatCurrency } from '../Functions/secondaryFunction'


const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    background-color: rgba(0, 0, 0, .5);
`;

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
`;

const Banner = styled.div `
    height:200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    width:100%;
`;

const H4 = styled.h4`
    font-size: 30px;
    line-height: 53px;
    font-family: Pacifico;
`;
const P = styled.p `
    font-size: 30px;
    line-height: 53px;
    font-family: Pacifico;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: auto; 
    height: calc(100% - 200px);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 30px;
`;
const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;  

export const totalPriceItems = order => order.price * order.count;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = useCount();

    const closeModal = e => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }   

    const order = {
        ...openItem,
        count: counter.count
    };


    
    const addToOrder = () => {
        setOrders([...orders, order])
        setOpenItem(null);
    }
    
    return (
        <Overlay id="overlay" onClick={closeModal}>
    
        <Modal>
            <Banner img={openItem.img}/>
            <Wrapper>
                <HeaderWrapper>
                    <H4>{openItem.name}</H4>
                    <P>{formatCurrency(openItem.price)}</P>
                </HeaderWrapper>
                <CountItem {...counter}/>
                <TotalPriceItem>
                    <span> Цена</span>
                    <span>{formatCurrency(totalPriceItems(order))}</span>
                </TotalPriceItem>
                <Button onClick={addToOrder}>Добавить</Button>
            </Wrapper>
        </Modal>
        </Overlay>
    )

};