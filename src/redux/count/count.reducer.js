import countActionTypes from "./count.types";

const INITIAL_STATE = {
  count : 0
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type){
    case countActionTypes.INCREASE : 
      return {
        ...state, 
        count : state.count + 1 
      }
    case countActionTypes.DECREASE : 
      return {
        ...state, 
        count : state.count - 1
      }
    default : return state; 
  }
}