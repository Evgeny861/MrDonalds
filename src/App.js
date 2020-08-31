import React from 'react';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle';
import { ModalItem } from './Components/ModalItem';
import { Order } from './Components/Order';
import { useOpenItem } from './Components/useOpenItem';

function App() {

  const openItem = useOpenItem;


  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Menu {...openItem}/>
      { openItem.openItem && <ModalItem {...openItem}/>}
      <Order/>
    </>
  );
}

export default App;
