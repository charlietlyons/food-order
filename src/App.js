import './App.css';
import NavigationBar from './components/Navigation/NavigationBar'
import Banner from './components/Banner/Banner'
import Section from './components/Section/Section'
import Modal from './components/Modal/Modal'

function App() {
  return (
      <div className="App">
        <NavigationBar/>
        <Banner/>
        <Section />
        <Modal />
      </div>
  );
}

export default App;
