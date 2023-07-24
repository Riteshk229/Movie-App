import { ADD_MOVIES, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITES } from "../actions";

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export default function movies(state = initialMoviesState, action) {

    switch (action.type) {
        case ADD_MOVIES: 
            return {
                ...state,
                list : action.movies
            }
        case ADD_TO_FAVOURITE: 
            return {
                ...state,
                favourites : [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title);
            console.log(filteredArray);
            return {
                ...state,
                favourites : filteredArray
            }
        default:
            return state;
    }


//     if (action.type == ADD_MOVIES) {
//         return {
//             ...state,
//             list: action.movies
//         }
//     }
//    return  state;
}