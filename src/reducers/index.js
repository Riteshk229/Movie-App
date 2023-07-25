import {
    ADD_MOVIES, ADD_TO_FAVOURITE,
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
    results : {}
}
export function search(state = { initialSearchState }, action) {
    console.log("Search_Reducer");
    return state
}

const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
}

export default function rootReducer(state = initialRootState, action) {
    return {
        movies: movies(state.movies, action),
        search: search(state.search,action)
    }
}