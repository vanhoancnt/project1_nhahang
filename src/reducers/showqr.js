import * as types from '../constants/ActionTypes';

var initState =false;

const myReducer =(state= initState,action)=>{
    switch(action.type){
        case types.ACTION_SHOW_QR:
            console.log(action);
            if(!state){
                return true;
            }else{
                return true;
            }
        case types.ACTION_CLOSE_QR:
            console.log(action);
            if(state){
                return false;
            }else{
                return false;
            }         
        default : return state;
    }
}

export default myReducer;