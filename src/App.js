import logo from './logo.svg';
import './App.css';
import Weatherapp from './components/Weatherapp';
import Navbar from './components/Navbar';
import Dummynav from './components/Dummynav';
import Carousel from './components/Carousel';
import { Provider } from 'react-redux';

import Store from './Redux/Store';
import Banner from './components/Banner';
import Todoapp from './components/Todoapp';

import Footer from './components/Footer';

function App() {
  return (
     <div className="App">
      
     
    
    <Provider store={Store}>
     
    {/* <Navbar />
      <Carousel/>  */}
       {/* <Weatherapp/> */}
       {/* <Banner/>*/}
       <Todoapp/> 
 
   </Provider>
  </div>
  );
}

export default App;
