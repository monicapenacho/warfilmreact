import Input from "../componentes/Input";
import Label from "../componentes/Label";
import TextArea from "../componentes/TextArea";
import { useEffect, useState } from "react";
import CheckboxGroup from "../componentes/CheckboxGroup_";

export default function Formulario() {

    const [film, setFilm] = useState({});       //useState es un objeto {}
    const [message, setMessage] = useState("");   //se crea variable de estado para guardar el mensaje de que el formulario se ha modificado con éxito

    useEffect(() => {
        //"http://localhost:3500/getById/${variable}"  //ruta - evento (vble estado) en el listado y pintar el listado
        fetch("http://localhost:3500/getById/66cbba85e7296909b9d9a51d", {       
            headers: {                                        //definir en el fetch los headers
             "Content-type": "application/json",
            }
         }) 
            .then(response => response.json())
            .then((info) => {
                console.log(info)
                setFilm(info)                   //devuelvo todo el objeto desde el servidor = info (me interesa toda la información de ese personaje)
            })                    
  }, [])    


    const [selectedCountries, setSelectedCountries] = useState([]);

    const options = [
        { value: 'Argentina', text: 'Argentina' },
        { value: 'España', text: 'España' },
        { value: 'Estados Unidos', text: 'Estados Unidos' },
        { value: 'Francia', text: 'Francia' },
        { value: 'Israel', text: 'Israel' },
        { value: 'Italia', text: 'Italia' },
        { value: 'Japon', text: 'Japón' },
        { value: 'Reino Unido', text: 'Reino Unido' },
        { value: 'Unión Soviética', text: 'Unión Soviética' }
    ];

    const handleSelectionChange = (selected) => {
        setSelectedCountries(selected);
    };

    const handleChange = (event) => {
        const key = event.target.id;
        const value = event.target.value;
        setFilm({...film, [key]: value})
    }

    //fetch sólo se ejecutará cuando presione el botón de enviar (escucho evento on submit y se ejecuta función handle submit) y no cuando entro en la url. Importante mensaje para avisar del cambio

    const handleSubmit = (ev) => {
        ev.preventDefault();                                    // evita que la página se refresque
        // Obtener el token de algún lugar, por ejemplo, localStorage o el estado
        const token = localStorage.getItem('token'); // el token tiene que estaralmacenado en localStorage
         // Verificar si el token está disponible
        if (!token) {
        setMessage('No se encontró un token de autenticación. Por favor, inicia sesión.');
        return;
        }
        fetch("http://localhost:3500/updateFilm/66cbba85e7296909b9d9a51d", {   
            method:"PUT",                                      //ruta en back = put
            body: JSON.stringify(film),                        // objeto body es un string (por el body se manda la película)
            headers: {                                        //definir en el fetch los headers
             "Content-type": "application/json",
             "Authorization":`Bearer ${token}`,               //enviar token de front a back y siempre por el header:  incluir el token en el encabezado de autorización
            }
         }) 
            .then(response => response.json())
            .then((info) => {
                console.log(info)
                setMessage(`La película ${info.name} se ha modificado con éxito`);                
            })
            .catch((error) => {
                console.error('Error al actualizar la película', error);
                setMessage('Ocurrió un error al actualizar la película');
            });
    };

    return (
        <form action="" method="get" onChange={handleChange} onSubmit={handleSubmit}>
            <div>
                <Label htmlFor="name" text="Nombre:" />
                <Input type="text" name="name" id="name" maxLength={50} value={film.name} />
            </div>
            <div>
                <Label htmlFor="year" text="Año:" />
                <Input type="number" name="year" id="year" minLength={4} maxLength={4} value={film.year} />
            </div>
            <div>
                <Label htmlFor="director" text="Director:" />
                <Input type="text" name="director" id="director" maxLength={50} value={film.director} />
            </div>
            <div>
                <Label htmlFor="synopsis" text="Sinopsis:" />
                <TextArea name="synopsis" id="synopsis" maxLength={50} value={film.synopsis} />
            </div>
            <div>
                <Label htmlFor="runtime" text="Duración:" />
                <Input type="number" name="runtime" id="runtime" maxLength={4} value={film.runtime} />
            </div>
            <div>
                <Label htmlFor="countries" text="Países:" />
                <CheckboxGroup
                    options={options}
                    name="countries"
                    onSelectionChange={handleSelectionChange}
                />
            </div>
            <div>
                Países seleccionados: {selectedCountries.join(", ")} {film.countries}
            </div>
            <div>
                <Label htmlFor="genre" text="Género:" />
                <Input type="text" name="genre" id="genre" maxLength={50} value={film.genre}/>
            </div>
            <div>
                <Label htmlFor="image" text="Imagen:" />
                <img src={film.image} alt="imagen" />
            </div>
 
            <div>
                <Label htmlFor="war" text="Guerra:" />
                <Input type="text" name="war" id="war" maxLength={50} value={film.war} />
            </div>
            <div>
                <Label htmlFor="era" text="Era:" />
                <Input type="text" name="era" id="era" maxLength={50} value={film.era} />
            </div>
            <div>
                <Input type="submit" value="Enviar" />
            </div>
            <p>{message}</p>                                
        </form>
    );
}
