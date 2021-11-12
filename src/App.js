import './App.css';
import NavigationBar from './components/Navigation/NavigationBar'
import Banner from './components/Banner/Banner'
import Section from './components/Section/Section'

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Banner/>
      <Section />
    </div>
  );
}

export default App;
