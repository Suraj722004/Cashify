import  'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'
import Navbar from './components/Navbar';
import MenuBar from './components/MenuBar';
import Home from './components/Home';
import AllProduct from './components/AllProduct';
import Service from './components/Service';
import Deals from './components/Deals';
import Footer from './components/Footer';


function App() {
 

  return (
    <>
    <Navbar/>
    <MenuBar/>
    <Home /> 
    <AllProduct/>
    <Service/>
    <Deals/>
    <Footer/>
    
          </>
  )
}

export default App
