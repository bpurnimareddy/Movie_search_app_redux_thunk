import * as actionTypes from '../actionTypes'

const intialstate={
    userDetails:[]
}

const signupReducer=(state=intialstate.userDetails,action)=>{
    switch(action.type){
        case actionTypes.SIGN_UP:
            state.push(action.data);
            break;
        default :
        break;   
    }
    return state
}

export default signupReducer;