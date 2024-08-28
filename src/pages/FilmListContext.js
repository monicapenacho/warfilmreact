import React, { useEffect, useState } from "react";
import "../App.css"; // Importa el archivo CSS para los estilos
import Film from "../componentes/Film";
import CarouselIntervalAleatorio from "../componentes/CarouselIntervalAleatorio";
import { getRandomFilms } from "../utils/getRandomFilms";


// Componente principal que maneja la lista de productos 
export default function FilmListContext() {
  
  const [films, setFilms] = useState([]);        ///useState es un objeto []
  const [carouselFilms, setCarouselFilms] = useState([]);

  // Función para obtener datos de la FilmAPI
  useEffect(() => {
      // Obtenemos una lista : /url render + route/ pag1&limit10 para que ponga lo que yo quiero al arrancar y no lo que el sistema tiene definido por defecto
      fetch('https://warfilm.onrender.com/getfilm?pag1&limit10', {
        headers: {                                        
          "Content-type": "application/json"
         }
      }) 
        .then((response) => response.json())
        .then((data) => {
          console.log("Respuesta de la API:", data); // Verificar el contenido de la respuesta
          // console.log(data.data);
          
          if (data) {
            const filmsList = data.data;
            // console.log("este es el console log de films  ", filmsList);

            // Obtener detalles adicionales de cada Film
            const newFilmsList = filmsList.map((film) => ({
              id: film._id,
              name: film.name,
              price: `$${(parseInt(film._id, 16) % 100).toFixed(2)}`, // Generar un precio ficticio basado en el id
              image: film.image
          })) 
            console.log(newFilmsList);
          
    
            // Seleccionar tres films aleatorios
            const selectedFilms = getRandomFilms(newFilmsList, 3);
            setCarouselFilms(selectedFilms);
            setFilms(newFilmsList);
            
          } else {
            console.error("Error: La estructura de datos no es la esperada.");
            setFilms([]); // Evitar errores en el map estableciendo un array vacío
          }

        })

        .catch((error) => console.error("Error fetching the films: ", error));
    }, []);                                                
  

  return (
    <div className="catalogo">
      <h1>Catálogo de Películas de Guerra</h1>
      {/* Pasar toda la lista de Películas al carrusel */}
      <CarouselIntervalAleatorio films={carouselFilms} />
      <div className="product-list">
        {films.map((film) => (
          <Film film={film}/>
        ))}
      </div>
    </div>
  );
}; 
