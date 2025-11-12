import './App.css';
import Header from "./Header"
import Hero from './Hero'; 
import Inspires from './Inspires';
import Exhibition from './Exhibition';
import About from './About';
import Card from './Card';
import Testimonial from './testmonials';
import Contact from './contact';
import Footer from './Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import Home from './Home';
import Stats from './Stats';




function App() {
  
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
         <Header/>
          <Hero/>
          <div className='w-11/12 mx-auto'>
            <Stats/>
          </div>
          
          <Inspires/>
          <Exhibition/>
          <About/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          < Card cost='$480000' car='Chevrolet Camaro' image='/GM.png'/>
          <Card cost='$950000' car='Mercedes' image='/Mercedes.png'/>
          <Card cost='$650000' car='Jeep Wrangler' image='/QM.jpg'/>
          <Card cost='$1200000' car='Volkswagen' image='/Volkswagen.png'/>
          <Card cost='$1100000' car='BMW' image='/MM.jpg'/>
          <Card cost='$370000' car='Subaru WRX' image='/CM.jpg'/>
          <Card cost='$60000' car='Fiat 500' image='/VM.jpg'/>
          <Card cost='$120000' car='Stellantis' image='/Stellantis.png'/>
          
          
          </div>
          <Testimonial/>
          <div className='bg-red-700 text-white p-5'>
            <Contact />
          </div>
          <div className='bg-cyan-600'>
            <Footer/>
          </div>
          </>}/>
          
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          
      </Routes>
    </BrowserRouter>
    
   



    
  )
}

export default App
