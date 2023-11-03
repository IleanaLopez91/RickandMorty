import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, CLEAN_ALL} from "./actionsTypes";
import axios from "axios";


export const addFav = (character) => {
    
    return async (dispatch) => {
       /*axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });*/
      try {
         const endpoint = 'http://localhost:3001/rickandmorty/fav';
         const {data} = await axios.post(endpoint, character);
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         console.log(error);
      }
    };
 };

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
       /*axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });*/
      try {
         const { data } = await axios.delete(endpoint);
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      } catch (error) {
         console.log(error)
      }
    };
};

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (orden) => {
    return{type: ORDER, payload: orden}
}

export const cleanAll = () => {
    return{type: CLEAN_ALL}
}