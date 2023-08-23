// import { useState } from 'react'

import './App.css'
// import react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};



function App() {
  return(
    <div className='app'>
      <Router>
        <Dashboard />
      </Router>
    </div>
  )

}

export default App
