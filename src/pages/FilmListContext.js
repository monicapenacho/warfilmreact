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
          if (data && Array.isArray(data.data)) {
            const filmsList = data.data;

            // Obtener detalles adicionales de cada Film
            const promises = filmsList.map((film) =>
              fetch(film.url)
                .then((res) => res.json())  // recoge la respuesta json
                .then((resData) => ({
                  id: resData.id,
                  name: resData.name,
                  price: `$${(resData.id * 10).toFixed(2)}`, // Asignamos un precio basado en su id
                  // image: resData.sprites.front_default, 
                  image: resData.image, 
                }))

          );
          // Promise.all Espera que todas las promesas se resuelvan
            Promise.all(promises).then((filmData) => {
                setFilms(filmData);
                console.log("filmData:", filmData) ;

                // Seleccionar tres Pokémon aleatorios
                const selectedFilms = getRandomFilms(filmData, 3);
                setCarouselFilms(selectedFilms);
            });
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
          <Film key={film.id} product={film}/>
        ))}
      </div>
    </div>
  );
}; 
