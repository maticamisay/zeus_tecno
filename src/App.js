import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSlider from './components/HeroSlider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <About />
    </div>
  );
}

export default App;
