export function getRandomFilms(filmArray, count) {
    const shuffledFilms = filmArray.sort(() => 0.5 - Math.random());
    return shuffledFilms.slice(0, count);
  }
  