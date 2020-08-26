import React from 'react';
import { NavBar } from './Components/NavBar'
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle'

function App() {

  const [openItem, setOpenItem] = React.useState('');

  console.log('Item:', openItem);

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Menu setOpenItem={setOpenItem}/>
    </>
  );
}

export default App;
