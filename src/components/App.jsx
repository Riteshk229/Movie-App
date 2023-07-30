import { useEffect,useReducer} from 'react'
import { data } from '../data'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import '../styles/App.css'
import { addMovies, setShowFavourites } from '../actions'
import { storeContext } from "../main";

function App(props) {
  const forceUpdate = useReducer(x => x + 1, 0)[1];
  console.log('STATE', props.store.getState());  // {movies: {}, search: {}}
  const store = props.store;
  const {movies, search} = props.store.getState();

  const {
    list,
    favourites,
    showFavourites
  } = movies;

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
    const { favourites } = movies;
    
    const index = favourites.indexOf(movie);

    if (index !== -1) {
      // found the moovie
      return true;
    }
    return false;
  }

  const onChangeTab = (val) => {
    store.dispatch(setShowFavourites(val))
  }

  const displayMovies = showFavourites ? favourites : list;

  return (
    <storeContext.Consumer>
      {(store) => {
          return (
            <>
              {console.log("render")}
              <div className="App">
                <Navbar
                  search={search}
                  dispatch={store.dispatch}
                />
                <div className="main">
                  <div className="tabs">
                    <div
                      className={`tab ${showFavourites ? '' : 'active-tabs'}`}
                      onClick={() => onChangeTab(false)}
                    >Movies</div>
                    <div
                      className={`tab ${showFavourites ? 'active-tabs' : ''}`}
                      onClick={()=>onChangeTab(true)}
                    >Favourites</div>
                  </div>

                  <div className="list">
                    {displayMovies.map((movie,index) => (
                      <MovieCard
                        movie={movie}
                        key={`movie-${index}`}
                        store={store}
                        isFavourite={isMovieFavorite(movie)}
                      />
                    ))}
                  </div>

                  {displayMovies.length == 0 && <div className='no-movies'> No Movies to display  </div>}
                </div>
              </div>
            </>
          )
      }}
    </storeContext.Consumer>
  );
  
}

export default App
