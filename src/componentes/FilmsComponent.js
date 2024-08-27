import React from "react";
import { useFilms } from "../hooks/useFilms";

const FilmsComponent = () => {
    const {films, loading, error } = useFilms();

    if (loading) return <p>loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {films.map((film) => {
                <div key={film.id}>{film.name}</div>
            })}
        </div>
    )
}

export default FilmsComponent;