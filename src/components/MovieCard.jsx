import { addFavourite } from "../actions";

const MovieCard = (props) => {
    const { movie, store, isFavourite } = props;
    console.log("favstatus", isFavourite);

    const handleFavouriteClick = () => {
        store.dispatch(addFavourite(movie));
        store.subscribe(() => {
            console.log("favourite list updated");
        })
        console.log("FavState", store.getState().favourites);
    }

    const handleUnFavouriteClick = () => {
        // store.dispatch(addFavourite(movie));
        // store.subscribe(() => {
        //     console.log("favourite list updated");
        // })
        // console.log("FavState", store.getState().favourites);
    }
    return (
        <>
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={ movie.Poster } />
                </div>
                <div className="right">
                    <div className="title"> { movie.Title } </div>
                    <div className="plot"> { movie.Plot }</div>
                    <div className="footer">
                        <div className="rating"> {movie.imdbRating}</div>
                        {
                            isFavourite
                             ?   <button
                                    className="unfavourite-btn"
                                    onClick={handleUnFavouriteClick}
                                >Unfavourite</button>
                            :   <button
                                    className="favourite-btn"
                                    onClick={handleFavouriteClick}
                                >Favourite</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard;