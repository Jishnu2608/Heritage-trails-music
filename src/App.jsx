import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import './App.css';
import ContentMusic from "./components/Content/content-music";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <ContentMusic/>
      <Footer/>
    </div>
  );
}

export default App;
