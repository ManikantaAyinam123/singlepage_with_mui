import logo from './logo.svg';
import './App.css';
import Weatherapp from './components/weatherapp';
import Navbar from './components/Navbar';
import Dummynav from './components/Dummynav';
import Carousel from './components/Carousel';
import { Provider } from 'react-redux';


import Banner from './components/Banner';
import Todoapp from './components/Todoapp';

import Footer from './components/Footer';
import store from './Redux/Store';

function App() {
  return (
    <div className="App">



      <Provider store={store}>

        <Navbar />
      <Carousel/> 
        <Weatherapp/>
        <Banner/>
        <Todoapp />
        <Footer/> 

      </Provider>
    </div>
  );
}

export default App;
