import Input from "./Input";
import Label from "./Label";
import TextArea from "./TextArea";
import { useEffect, useState } from "react";
import CheckboxGroup from "./CheckboxGroup_";

export default function Formulario() {

    const [film, setFilm] = useState({});       //useState es un objeto {}

    useEffect(() => {
        //"http://localhost:3500/getById/${variable}"  //ruta - evento (vble estado) en el listado y pintar el listado
        fetch("http://localhost:3500/getById/66cbba85e7296909b9d9a51d", {       
            headers: {                                        //definir en el fetch los headers
             "Content-type": "application/json"
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

    return (
        <form action="" method="get">
            <div>
                <Label htmlFor="name" text="Nombre:" />
                <Input type="text" name="name" id="name" maxLength={50} />
            </div>
            <div>
                <Label htmlFor="year" text="Año:" />
                <Input type="number" name="year" id="year" minLength={4} maxLength={4} />
            </div>
            <div>
                <Label htmlFor="director" text="Director:" />
                <Input type="text" name="director" id="director" maxLength={50} />
            </div>
            <div>
                <Label htmlFor="synopsis" text="Sinopsis:" />
                <TextArea name="synopsis" id="synopsis" maxLength={50} />
            </div>
            <div>
                <Label htmlFor="runtime" text="Duración:" />
                <Input type="number" name="runtime" id="runtime" maxLength={4} />
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
                Países seleccionados: {selectedCountries.join(", ")}
            </div>
            <div>
                <Label htmlFor="genre" text="Género:" />
                <Input type="text" name="genre" id="genre" maxLength={50} />
            </div>
            <div>
                <Label htmlFor="image" text="Imagen:" />
                <img src="" alt="imagen" />
            </div>
 
            <div>
                <Label htmlFor="war" text="Guerra:" />
                <Input type="text" name="war" id="war" maxLength={50} />
            </div>
            <div>
                <Label htmlFor="era" text="Era:" />
                <Input type="text" name="era" id="era" maxLength={50} />
            </div>
            <div>
                <Input type="submit" value="Enviar" />
            </div>
        </form>
    );
}
