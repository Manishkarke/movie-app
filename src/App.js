import { useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import searchIcon from "./search.svg";


const API_URL = "https://www.omdbapi.com?apikey=197bf45b"

function App() {
  const [searchTitle, setSearchTitle] = useState('');
  const [movies, setMovies] = useState([]);

  // -- This searchMovies function takes title from the user and fetch the searched movie from the api
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }


  // //  useEffect hook is executed when this component is rendered
  // useEffect(() => {
  //   searchMovies('Spiderman');
  // }, []);

  // Handle and Update input part
  const inputHandler = (event) => {
    event.preventDefault();
    setSearchTitle(event.target.value);
  }


  return (
    <div className="app">
      <h1>CinemaGhar</h1>

      <div className='search'>
        <input
          type='text'
          placeholder='Search for movies'
          value={searchTitle}
          onChange={inputHandler}
        />

        <img src={searchIcon} alt='Search Icon' onClick={() => searchMovies(searchTitle)} />
      </div>


      {
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => {
              return <MovieCard data={movie} />
            })}
          </div >
        ) : (
          <div className='empty'>
            <h2>No movies found.</h2>
          </div>
        )
      }
    </div >
  );
}

export default App;



// Movie api key: 