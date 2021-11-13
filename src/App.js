import './App.css';
import NavigationBar from './components/Navigation/NavigationBar'
import Banner from './components/Banner/Banner'
import Section from './components/Section/Section'
import Modal from './components/Modal/Modal'
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([{title: "poop"}])
  const [uniqueNames, setUniqueNames] = useState([]);

  function addItem(newItem) {
    if(newItem.amount > 0) {
      setItems((prevItems) => {
        const n = prevItems.map((prevItem) => {
          if (prevItem.title === newItem.title) {
            prevItem.amount = parseInt(prevItem.amount) + parseInt(newItem.amount)
          }          
          console.log(prevItem)
          return prevItem;
        })
        return [n]
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
