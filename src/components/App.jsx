import { useEffect, useState, useReducer} from 'react'
import { data } from '../data'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import '../styles/App.css'

function App(props) {
  const forceUpdate = useReducer(x => x + 1, 0)[1];
  const store = props.store;
  const movies = props.store.getState();

  useEffect(() => {
    store.subscribe(() => {
      console.log("Updated");
      forceUpdate();
    })
    // make api call
    // dispatch action
    store.dispatch({
      type: "ADD_MOVIES",
      movies : data
    })
    console.log("state",store.getState());
  }, []);
  
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
            {movies.map((movie,index) => (
              <MovieCard movie={movie} key={`movie-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
