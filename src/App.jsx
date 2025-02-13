import  'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'
import Navbar from './components/Navbar';
import MenuBar from './components/MenuBar';
import AllProduct from './components/AllProduct';
import Service from './components/Service';
import Deals from './components/Deals';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Services from './components/Services';
import Device from './components/Device ';
import Stores from './components/Stores';


function App() {
 

  return (
   
    <div className='w-[100%] justify-center items-center ml-20'>
    <div className='w-[85%] '>
    <Navbar/>
    <MenuBar/>
    <Slider/>
   
    <Services/>
    <Device/>
    <AllProduct/>
    <Service/>
    <Stores/>
    <Deals/>
    <Footer/>
    </div>
    </div>
    
    
        
  )
}

export default App
