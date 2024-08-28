// Un componente que representa un solo producto
import React, { useContext } from "react";             //Context
import { CartContext } from "./CartContext";            //Context

import { FaShoppingCart } from "react-icons/fa";


export default function Film({ film }) {

    const { addToCart } = useContext(CartContext);
    console.log(film);
    

    return (
      <div className="film">
        <img src={film.image} alt={film.name} width="100" />
        <h3>{film.name}</h3>
        <p>Price: {film.price}</p>
        {/* <button className="btn btn-info" onClick={() => onAddToCart(product)}>Añadir al carrito</button> */}
        <button className="btn btn-info añadir" onClick={() => addToCart(film)}>Añadir al <FaShoppingCart /></button>
      </div>
    );
  }
  