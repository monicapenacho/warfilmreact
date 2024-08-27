// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cabecera from './componentes/Cabecera.js';
// import Home from './pages/Home.js';
// import About from './pages/About.js';
// import NotFound from './pages/NotFound.js';
// import Footer from './componentes/Footer.js';
// import NavBar from './componentes/NavBar.js';

// import ShoppingCartContext from './pages/ShoppingCartContext.js';
// import FilmListContext from './pages/FilmListContext.js';
// import { CartProvider } from './componentes/CartContext.js';             //Context

// import 'bootstrap/dist/css/bootstrap.min.css';
// import CarouselIntervalAleatorio from './componentes/CarouselIntervalAleatorio.js';
// import NewUserFormReact from './pages/NewUserFormReact.js';



// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <Cabecera />
//         <NavBar />
//         <CarouselIntervalAleatorio />                  
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<FilmListContext />} />
//           <Route path="/shoppingcart" element={<ShoppingCartContext />} />
//           <Route path="*" element={<NotFound />} />
//           <Route path="/user" element={<NewUserFormReact />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;



// import { useState } from 'react';
// import './App.css';
// import Formulario from './components/Formulario';
// import { useEffect } from 'react';
// import FilmsComponent from './components/FilmsComponent';

// function App() {


//   const [films, setFilms] = useState([]);            

//   useEffect(() => {
//     fetch("https://warfilm.onrender.com/getfilm?pag1&limit10", {       
//        headers: {                                        
//         "Content-type": "application/json"
//        }
//     })     
//     .then(response => response.json())
//     .then((info) => setFilms(info.data) )               

//   }, [])

//   return (
//     <div className="App">
//       <Formulario />
//       <FilmsComponent /> 
//     </div>
//   );
// }

// export default App;
