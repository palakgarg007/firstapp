// import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Bag from './components/Bag';
import Apples from './components/Apples';
import Pears from './components/Pears';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Btn from './Event Components/Btn'
import ModeToggle from './Event Components/ModeToggle';
import NumGuess from './Event Components/NumGuess';
import PrintTime from './components/PrintTime';



function App() {
  const date = new Date();
  return(
    // <div className="App">
    //   <Bag children={<Apples color="Red" number="5" />}/>
    //   <Bag children={<Pears friend="Peter" />} />
    // </div>

    // <div>
    //   <Nav />
    //   <Intro1 />
    //   <Intro2 />
    //   <Intro3 />
    //   <Promo />
    //   <Footer />
    // </div>


    // <div>
    //   <h1>Task: Add three Card elements</h1>
    //   <Cards h2="First card's h2" h3="First card's h3" />
    //   <Cards h2="Second card's h2" h3="Second card's h3" />
    //   <Cards h2="Third card's h2" h3="Third card's h3" />
    // </div>

    // <div>
    //   <Btn />
    // </div>

    // <div>
    //   <ModeToggle />
    // </div>

    // <div>
    //   <NumGuess />
    // </div>

    <div>
      <PrintTime message={date.toLocaleTimeString()} />
    </div>
  )
}

export default App;