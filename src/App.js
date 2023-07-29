// import logo from './logo.svg';
// import './App.css';
import Heading from './Heading';
import Bag from './components/Bag';
import Apples from './components/Apples';
import Pears from './components/Pears';

function App() {
  return(
    <div className="App">
      <Bag children={<Apples color="Red" number="5" />}/>
      <Bag children={<Pears friend="Peter" />} />
    </div>
  )
}

export default App;