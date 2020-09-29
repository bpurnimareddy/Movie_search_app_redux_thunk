import * as actionTypes from '../actionTypes'
const initialState={
    profileDetails:{}
}

const ProfileDetails_Reducuer =(state=initialState,action)=>{
 switch (action.type) {
     case actionTypes.ADD_PROFILE:
        state.profileDetails=action.data
         break;
 
     default:
         break;
 }
 return state;
}

export default ProfileDetails_Reducuer ;