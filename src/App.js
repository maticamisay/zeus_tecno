import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSlider from './components/HeroSlider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <h1>Hola</h1>
    </div>
  );
}

export default App;
