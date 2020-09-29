import * as actionTypes  from './actionTypes';
import axios from 'axios'

export const signup=(data)=>{
    return{
        type:actionTypes.SIGN_UP,
        data
    }
}

export const addMovies=(data)=>{
    return{
        type:actionTypes.ADD_MOVIES_DATA,
        data
    }
}
const apiUrl="http://www.omdbapi.com/?i=tt3896198&apikey=3b533509";
export const getMovies=(enter_details)=>{
    return dispatch=>{
        axios(apiUrl + "&s=" +  enter_details)
        .then((data)=>{
            dispatch(addMovies(data.data.Search))
        })
    }
    
}
   


export const add_favList=(data)=>{
    return{
        type:actionTypes.ADD_FAV_LIST,
        data
    }
}

export const add_profile=(data)=>{
    return{
        type:actionTypes.ADD_PROFILE,
        data
    }
}