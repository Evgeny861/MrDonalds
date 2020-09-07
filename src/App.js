import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth'

const firebaseConfig = {
  apiKey: "AIzaSyBdZOJE-jeNYPJUVdCPAa-G6zcXuOAKy4c",
  authDomain: "mrdonalds-ca89a.firebaseapp.com",
  databaseURL: "https://mrdonalds-ca89a.firebaseio.com",
  projectId: "mrdonalds-ca89a",
  storageBucket: "mrdonalds-ca89a.appspot.com",
  messagingSenderId: "1059074311485",
  appId: "1:1059074311485:web:06e54f7abfd16aa72d3154"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth)
  const openItem = useOpenItem();
  const orders = useOrders();


  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order 
        {...orders} 
        {...openItem} 
        {...auth}
        firebaseDatabase={firebase.database}
        />
      <Menu {...openItem}/>
      { openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;
