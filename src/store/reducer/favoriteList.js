import * as ActionsTypes from '../../store/actionTypes'
const intiState={
  favList:[]
}

const FavList =(state=intiState,action)=>{
    switch (action.type) {
        case ActionsTypes.ADD_FAV_LIST:
            state.favList.push(action.data)
            break;
    
        default:
            break;
    }
    return state
    
}

export default FavList