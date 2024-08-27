import { useEffect, useState } from "react";

export const useFilms = () => {
    const [films, setFilms] = useState([]); // Definir el estado para almacenar las películas
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await fetch("http://localhost:3500/getfilm");
                const data = await response.json();
                if (response.ok) {
                    setFilms (data.data);
                } else {
                    setError("No se pudieron obtener las películas");
                }
            } catch (error) {
                setError("Error server");
            } finally {
                setLoading(false);
            }
        };

        fetchFilms();
    }, []);

    return {films, loading, error};     //retornar los estados

}