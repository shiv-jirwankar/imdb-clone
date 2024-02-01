import { useEffect, useState } from "react";
import Cards from "../card/Card";
import { useParams } from "react-router-dom";
import "./MovieList.css";

export default function MovieList() {
  // considering movieCollectionType is 'Top Rated'
  const [movies, setMovies] = useState([]);
  const { type } = useParams();

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  useEffect(() => {
    getData();
  }, [type]);

  useEffect(() => {
    getData();
  }, []);

  if (!movies) {
    return <p>We have encountered some error.....</p>;
  }

  return (
    <div className="movie__list">
      <h2 className="list__title">
        {(type ? type : "POPULAR").toUpperCase().replace("_", " ")}
      </h2>
      <div className="list__cards">
        {movies.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
    </div>
  );
}
