

/* Estilos NewUserForm */

/* Estilos generales */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Estilos para el formulario de nuevo usuario */
  
  /* Contenedor general del formulario */
  form {
    max-width: 500px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Estilo para cada grupo de formulario (label + input) */
  .mb-3 {
    margin-bottom: 20px;
  }
  
  /* Estilo para las etiquetas de los campos */
  .form-label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
    color: #333;
    font-size: 14px;
  }
  
  /* Estilo para los campos de entrada */
  .form-control {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  
  .form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
  
  /* Estilo BOTON */
  /* Estilo para el botón de envío y para el botón de añadir al carrito */
  .btn {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #17a2b8;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn:hover {
    background-color: #138496;
  }
  
  /* Estilo para cambiar el color del botón cuando es presionado */
  .btn:active {
    background-color: #117a8b;
  }
  
  /* Estilo para campos de texto con bordes más suaves */
  .form-control {
    border-radius: 4px;
    border: 1px solid #ced4da;
  }
  
  /* Responsive: centrar el formulario en pantallas más pequeñas */
  @media (max-width: 576px) {
    form {
      padding: 15px;
      margin: 20px;
    }
  
    .form-control {
      padding: 8px;
      font-size: 14px;
    }
  
    .btn {
      padding: 8px 16px;
      font-size: 14px;
    }
  }
  
  
  
  /* Estilo para el header */
  header {
    background-color: #17a2b8; /* Color de fondo */
    color: #fff; /* Color del texto */
    padding: 20px 0; /* Espaciado interno */
    text-align: center; /* Centra el texto */
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  */
    /* Sombra ligera */
  }
  
  /* Estilo para el título del header y catálogo de productos*/
  h1 {
    font-size: 2.5rem; /* Tamaño del texto del título */
    font-weight: bold; /* Negrita para el título */
    margin: 0; /* Quita el margen predeterminado */
    font-family: 'Arial', sans-serif; /* Tipografía del título */
  }
  
  /*Estilo para el titulo carrito*/
  h2 {
    font-size: 2rem; /* Tamaño del texto del título carrito */
    font-weight: bold; /* Negrita para el título carrito */
    margin: 0; /* Quita el margen predeterminado */
    font-family: 'Arial', sans-serif; /* Tipografía del título carrito */
  }

  
  /* Responsive: Ajusta el tamaño del texto en pantallas pequeñas */
  /* @media (max-width: 576px) {
    header h1 {
      font-size: 1.8rem; 
    }
  } */
  
  /* Estilo para el carrito */
  .cart {
    margin-top: 20px;
    padding: 20px;
    /* background-color: #f7f7f7; */
    background-color: #17a2b8;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  
  /* Estilo para el contenedor de la barra de navegación */
  .navbar {
    background-color: #17a2b8;
    padding: 10px 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .navbarli {
    /* Alinear en una fila */
    display: flex; justify-content: center; align-items: center;
    /* Elimina los puntos de la lista */
    list-style-type: none;
  
  }

  Incluido class en función / div
  <div className="navbar">
  <Link to="/" className="navbarlink">Inicio</Link>
  creada nueva
  <div className="navbarli">

    {/* <h2>Carrito</h2> */}
    <h3>Carrito</h3>