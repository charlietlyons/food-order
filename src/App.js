import './App.css';
import NavigationBar from './components/Navigation/NavigationBar'
import Banner from './components/Banner/Banner'
import Section from './components/Section/Section'
import Modal from './components/Modal/Modal'
import { useState } from 'react';
import { CartContextProvider } from './context/CartContext';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
      <CartContextProvider className="App">
        <Modal showModal={showModal} />
        <NavigationBar onCartClick={() => { setShowModal(!showModal) }}/>
        <Banner/>
        <Section/>
      </CartContextProvider>
  );
}

export default App;
