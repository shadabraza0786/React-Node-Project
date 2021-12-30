import { ADD_USER } from '../actions/type'
 
const initialState = { 
    data: [],
};

//  addUserReducer ---------------

const addUserReducer =  (state = initialState, action) => {
    switch (action.type){
        case ADD_USER:
            return {
                ...state,
                data: [...state.data, action.message],
            };
        default:
            return state
    }
};

export default addUserReducer;

 