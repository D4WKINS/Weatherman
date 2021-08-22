import './App.css';
import './App.scss';
import Navigation from './components/Navigation.jsx'
import Slider from './components/Slider.jsx'
import Search from './components/Search.jsx'
import Forecast from './components/Forecast';
import Footer from './components/Footer.jsx'
function App() {
  return (
    <div id="body">
      <Navigation/>
      <Slider/>
      <Search/>
      <Forecast/>
      <Footer/>
    </div>
  );
}

export default App;
