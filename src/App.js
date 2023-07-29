// import logo from './logo.svg';
// import './App.css';
import Heading from './Heading';
import Bag from './components/Bag';
import Apples from './components/Apples';
import Pears from './components/Pears';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';
import Footer from './components/Footer';

function App() {
  return(
    // <div className="App">
    //   <Bag children={<Apples color="Red" number="5" />}/>
    //   <Bag children={<Pears friend="Peter" />} />
    // </div>
    <div>
      <Nav />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Promo />
      <Footer />
    </div>
  )
}

export default App;