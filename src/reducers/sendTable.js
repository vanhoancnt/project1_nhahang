import * as types from '../constants/ActionTypes';

var initState =null;

const myReducer =(state= initState,action)=>{
    switch(action.type){
        case types.ACTION_SEND_TABLE:
            console.log(action);
            var table = action.table;
            console.log(table);
            state=table;
            return state;
        default : return state;
    }
}

export default myReducer;