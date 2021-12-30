import { FETCH_USER, FETCH_USERS_LOADING } from '../actions/type'

const defaultState = {
    Users: [],
    error: null,
    isLoading : false,
};

const fetchUserReducer = (state = defaultState, action) => {
    switch(action.type){
        case FETCH_USER:
            return {...state, Users :  action.payload };
        case FETCH_USERS_LOADING:
            return {...state, isLoading: action.payload }
        default:
            return state;
    }
}

export default fetchUserReducer;