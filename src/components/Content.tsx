import { MovieCard } from "../components/MovieCard";
import "../styles/content.scss";

import { MovieProps, GenreResponseProps } from "../types";

interface Props {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

function Content({ selectedGenre, movies }: Props) {
  return (
    <div className='container'>
      <header>
        <span className='category'>
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className='movies-list'>
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Content;
