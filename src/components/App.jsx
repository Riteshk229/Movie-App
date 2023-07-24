import { useEffect, useState, useReducer} from 'react'
import { data } from '../data'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import '../styles/App.css'
import { addMovies } from '../actions'

function App(props) {
  const forceUpdate = useReducer(x => x + 1, 0)[1];
  const store = props.store;
  const {list} = props.store.getState();

  useEffect(() => {
    store.subscribe(() => {
      console.log("Updated");
      forceUpdate();
    })
    // make api call
    // dispatch action
    store.dispatch(addMovies(data))
    console.log("state",store.getState());
  }, []);

  const isMovieFavorite  = (movie) => {
    const { favourites } = store.getState();
    
    const index = favourites.indexOf(movie);

    if (index !== -1) {
      // found the moovie
      return true;
    }
    return false;
  }
  
  return (
    <>
      {console.log("render")}
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {list.map((movie,index) => (
              <MovieCard
                movie={movie}
                key={`movie-${index}`}
                store={store}
                isFavourite={isMovieFavorite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
