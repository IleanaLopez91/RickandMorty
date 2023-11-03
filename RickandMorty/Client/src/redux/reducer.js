import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, CLEAN_ALL } from "./actionsTypes";

const inicialState = {
    myFavorites : [],
    allCharacters: []
}

const rootReducer = (state = inicialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: payload, 
                allCharacters: payload };
        
        case REMOVE_FAV:
            return { ...state, myFavorites: payload };

        case FILTER:
            // eslint-disable-next-line no-case-declarations
            let copy3 = state.allCharacters.filter((char) => {
                return char.gender === payload
            });
            return{
                ...state,
                myFavorites: copy3
            }

        case ORDER:
            // eslint-disable-next-line no-case-declarations
            let copy4 = state.allCharacters;
            // eslint-disable-next-line no-case-declarations
            let order = copy4.sort((a,b) => {
                if(payload === "A"){
                    return a.id - b.id
                }else if(payload === "D"){
                    return b.id - a.id
                }else{
                    return 0
                }
            })
            return{
                ...state,
                myFavorites: order
            }

        case CLEAN_ALL:
            return{
                ...state,
                myFavorites : [],
                allCharacters: []
            }

        default:
            return {...state}
    }
}

export default rootReducer