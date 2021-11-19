import './App.css';
import NavigationBar from './components/Navigation/NavigationBar';
import Banner from './components/Banner/Banner';
import Section from './components/Section/Section';
import Modal from './components/Modal/Modal';
import { useState, useReducer } from 'react';
import { ItemReducer } from './components/ItemReducer';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [items, dispatch] = useReducer(ItemReducer, [], )

  function addItem(newItem) {
    if(newItem.amount > 0) {
        dispatch({
          item: newItem
        })
  }}

  return (
      <div className="App">
        <NavigationBar onCartClick={() => { setShowModal(!showModal) }}/>
        <Banner/>
        <Section addItem={addItem}/>
        <Modal showModal={showModal} items={items} />
      </div>
  );
}

export default App;
