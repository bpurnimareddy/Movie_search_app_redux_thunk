import * as actionType from '../actionTypes'
const intialState={
    result:[]
}

const movieResult=(state=intialState,action)=>{
    switch(action.type){
        case actionType.ADD_MOVIES_DATA:
            state.result=action.data
            break;
        default :
        break;

    }
    //console.log(state.result)
    return state
}

export default movieResult;