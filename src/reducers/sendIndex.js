import * as types from '../constants/ActionTypes';

var initState =-1;

const myReducer =(state= initState,action)=>{
    switch(action.type){
        case types.ACTION_SEND_INDEX:
            var index = action.index;
            state=index;
            return state;
        default : return state;
    }
}

export default myReducer;