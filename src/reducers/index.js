import { combineReducers } from "redux";

import {
    ADD_MOVIES,
    ADD_MOVIE_TO_LIST,
    ADD_SEARCH_RESULT,
    ADD_TO_FAVOURITE,
    REMOVE_FROM_FAVOURITES,
    SET_SHOW_FAVOURITES
} from "../actions";

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export function movies(state = initialMoviesState, action) {
    console.log("MOvies_Reducer");
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
            console.log("Filtred_Array",filteredArray);
            return {
                ...state,
                favourites : filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list : [action.movie,...state.list]
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

const initialSearchState = {
    results: {},
    showSearchResults: false,
}
export function search(state = { initialSearchState }, action) {
    console.log("Search_Reducer");
    switch (action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                results: action.movie,
                showSearchResults : true
            }
            case ADD_MOVIE_TO_LIST:
                return {
                    ...state,
                    showSearchResults: false
                }
        default:
            return state
    }
}

const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
}

// export default function rootReducer(state = initialRootState, action) {
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search,action)
//     }
// }

export default combineReducers({
    movies,
    search
 });