import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecera from './componentes/Cabecera.js';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './componentes/Footer';
import NavBar from './componentes/NavBar.js';

import ShoppingCartContext from './pages/ShoppingCartContext.js';
import FilmListContext from './pages/FilmListContext.js';
import { CartProvider } from './componentes/CartContext';             //Context

import 'bootstrap/dist/css/bootstrap.min.css';
// import CarouselIntervalAleatorio from './componentes/CarouselIntervalAleatorio';
import NewUserFormReact from './pages/NewUserFormReact.js';
import Formulario from './pages/Formulario.js';


function App() {
  return (
    <CartProvider>
      <Router>
        <Cabecera />
        <NavBar />
        {/* <CarouselIntervalAleatorio />                   */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<FilmListContext />} />
          <Route path="/shoppingcart" element={<ShoppingCartContext />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/user" element={<NewUserFormReact />} />
          <Route path="/form" element={<Formulario />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;



