import * as types from './../constants/ActionTypes';

var initState =false;

const myReducer =(state= initState,action)=>{
    switch(action.type){
        case types.ACTION_TOOGLE_TABLE:
        console.log(action);
            return !state;
        default : return state;
    }
}

export default myReducer;