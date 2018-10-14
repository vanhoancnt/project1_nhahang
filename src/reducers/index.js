import { combineReducers } from 'redux';
import showqr from './showqr';
import showInvoice from './showInvoice';
import sendIndex from './sendIndex';
import listTables from './listTables';
import sendTable from './sendTable';
var myReducer = combineReducers({
    showqr,
    showInvoice,
    sendIndex,
    listTables,
    sendTable
});

export default myReducer;