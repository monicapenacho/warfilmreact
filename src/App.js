import React from 'react';
//NavBar
import Cabecera from './componentes/Cabecera.js';
import NavBar from './componentes/NavBar';
// import { Navbar } from 'react-bootstrap';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './componentes/Footer';
//Context
import ShoppingCartContext from './pages/ShoppingCartContext.js';
import FilmListContext from './pages/FilmListContext.js';
import { CartProvider } from './componentes/CartContext';           
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import CarouselIntervalAleatorio from './componentes/CarouselIntervalAleatorio';
import NewUserFormReact from './pages/NewUserFormReact.js';
import Formulario from './pages/Formulario.js';
// Login, Roles, PrivateRoute en React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.js';
import UserPage from './pages/privateroute/UserPage.js';
import AdminPage from './pages/privateroute/AdminPage.js';
import PrivateRoute from './pages/privateroute/PrivateRoute.js';

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
          <Route path="/films" element={<FilmListContext />} />
          <Route path="/shoppingcart" element={<ShoppingCartContext />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/user" element={<NewUserFormReact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<PrivateRoute role="user"><UserPage /></PrivateRoute>} />
          <Route path="/admin" element={<PrivateRoute role="admin"><AdminPage /></PrivateRoute>} />
          <Route path="/form" element={<Formulario />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;



