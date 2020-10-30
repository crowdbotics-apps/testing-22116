import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn259165064Reducer from '../features/SignIn259165064/redux/reducers'
import SignIn2165001Reducer from '../features/SignIn2165001/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn259165064: SignIn259165064Reducer,
SignIn2165001: SignIn2165001Reducer,

});