import React from 'react';
import styled from 'styled-components';

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
    margin-bottom: 20px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
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

export const ModalItem = ({ openItem, setOpenItem }) => {

    function closeModal(e) {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }       
    
    if(!openItem) return null;

    return (
        <Overlay id="overlay" onClick={closeModal}>
    
        <Modal>
            <Banner img={openItem.img}/>
            <Wrapper>
                <H4>{openItem.name}</H4>
                <P>{openItem.price}</P>
            </Wrapper>
            <Button>Добавить</Button>
        </Modal>
        </Overlay>
    )

};