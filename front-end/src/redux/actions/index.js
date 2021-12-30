import { ADD_USER, UPDATE_USER, DELETE_USER } from "./type";

 
export const addUser = (message) =>({
    type: ADD_USER,
    message,
});

 
export const updateUser = (message, id) =>({
    type: UPDATE_USER,
    message,
    id,
});


export const deleteUser = (id) =>({
    type: DELETE_USER,
    id,
});

 