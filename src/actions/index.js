import * as types from './../constants/ActionTypes';

export const showqr=()=>{
    return{
        type:types.ACTION_SHOW_QR,
    }  
}

export const showInvoice=()=>{
    return{
        type:types.ACTION_SHOW_INVOICE
    }  
}

export const sendIndex=(index)=>{
    return {
        type:types.ACTION_SEND_INDEX,
        index
    }
}

export const closeQr=()=>{
    return {
        type:types.ACTION_CLOSE_QR
    }
}

export const closeInvoice=()=>{
    return {
        type:types.ACTION_CLOSE_INVOICE
    }
}

export const listTable=()=>{
    return {
        type:types.ACTION_LIST_TABLE
    }
}

export const changeTableStatus=(table)=>{
    return {
        type:types.ACTION_CHANGE_TABLE_STATUS,
        table
    }
}

export const sendTable=(table)=>{
    return {
        type:types.ACTION_SEND_TABLE,
        table
    }
}