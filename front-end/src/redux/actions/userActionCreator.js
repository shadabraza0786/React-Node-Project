import { FETCH_USER, FETCH_USERS_LOADING } from './type';
import axios from 'axios';

const url = "http://localhost:5000/users";

export const fetchUserSucess = (data) =>{
    debugger; 
    return {
        type : FETCH_USER,
        payload : data,
    }
}

export const fetchUsersLoading = (data) =>{
    debugger; 
    return {
        type : FETCH_USERS_LOADING,
        payload : data
    }
}

const normalizeResponce = (data) =>{
    const arr = data.map( item => {
        const keys = Object.keys(item);

        keys.forEach( k => {
            item[k.toLowerCase()] = item[k];
            delete itme[k]
        });

        return item;
        
    })
        return arr;
}


export const fetchUsers = () =>{
    let isLoading = true;

    return (dispatch) => {
        dispatch(fetchUsersLoading(isLoading));
        return axios.get(url)
        .then(response => {
            const data = normalizeResponce(response.data);
            dispatch(fetchUserSucess(data));
            isLoading = false;
            dispatch(fetchUsersLoading(isLoading));
        }).catch(error =>{
            console.log(error);
            isLoading = false;
            dispatch(fetchUsersLoading(isLoading));
        })
    }
}