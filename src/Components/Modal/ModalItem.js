import React from 'react';
import styled from 'styled-components';
import { Button } from '../Style/ModalButton';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { formatCurrency, totalPriceItems } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useTopping';
import { useChoices } from '../Hooks/useChoices'


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


export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = useCount(openItem.count);
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);
    const isEdit = openItem.index > -1;

    const closeModal = e => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }   

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice
    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    }
    
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
                { openItem.toppings && <Toppings { ...toppings }/> }
                { openItem.choices &&  <Choices { ...choices } openItem={ openItem }/>}
                <TotalPriceItem>
                    <span> Цена</span>
                    <span>{formatCurrency(totalPriceItems(order))}</span>
                </TotalPriceItem>
                
                <Button 
                    onClick={isEdit ? editOrder : addToOrder}
                    disabled={ order.choices && !order.choice}
                >{isEdit ? 'Редактировать' : 'Добавить'}</Button>
            </Wrapper>
        </Modal>
        </Overlay>
    )

};