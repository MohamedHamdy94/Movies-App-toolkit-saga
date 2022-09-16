import React from 'react'

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import Favourit from './pages/Favourit';
import MovieDetails from './pages/MovieDetails';
import { useSelector } from 'react-redux';

function App() {
  const {lang}=useSelector((state)=>({...state.movies}))

  return (
    <div className="App bg-dark h-100" dir={lang === 'en' ? 'ltr' : 'rtl'} style={{height:'100%'}}>
      <BrowserRouter>
        <NavBar />
        <div className=" h-100"  style={{height:'100%'}}>

        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/Movies" element={<Home/>} />
          <Route path="/favourit" element={<Favourit/>} />
          <Route path="/favourit/movie/:id" element={<MovieDetails />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
