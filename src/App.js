import Navbar from './components/Navbar';
import Features from './components/Features';
import About from './components/About';
import Work from './components/Work';
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Aos Library
import Aos from "aos"
import "aos/dist/aos.css"

function App() {

  Aos.init({
    duration: 2000
  })

  const playAudio = () =>{
    const audio = document.getElementById("audio")
    audio.play()
  }

  window.addEventListener("load", function(){
    const loader =  document.querySelector(".loader");
    loader.className += " hidden"
  })

  return (
    <> 
    <div className='loader'>
        <img className='img-fluid' src="images/loading.gif" alt='loading...'/>
      </div>
    <div onClick={playAudio} id="body">
      <audio id='audio'>
        <source src='audio/AURORA_-_Runaway.mp3' />
      </audio>
      <Navbar />
      <div data-aos="zoom-in"><Features /></div>
      <div  data-aos="slide-up"><About /></div>
      <div  data-aos="slide-up"><Work /></div>
      <div  data-aos="slide-up"><Project /></div>
      <div  data-aos="slide-up"><Contact /></div>
      <div  data-aos="slide-up"><Footer /></div>
      </div>
    </>
  );
}

export default App;
