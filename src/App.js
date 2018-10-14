import React, { Component } from 'react';
import Table from './components/Table';
import Qrform from './components/Qrform';
import InvoiceForm from './components/InvoiceForm';
import './App.css';
import {connect} from 'react-redux';
class App extends Component {

    // constructor(props){
    //     super(props);
    //     this.state ={
    //         tables:[]
    //     }
    // }
    // componentWillReceiveProps(nextProps){
    //     if(this.props !== nextProps) {
    //         this.setState({
    //             tables:nextProps.tables
    //         });
    //     }
    // }
    render() {
        var {isDisplayQR, isDisplayInvoice} = this.props;
        var { tables } = this.props;
        // this.setState({
        //     tables:tables
        // });
        console.log(tables);
        var eleTables = tables.map((table, index) => {
            return <Table key={table.id} index={index} table={table} />
        });
        return (
            <div>
                <div className="mt-100 ml-200 flex-container">
                    {eleTables}
                </div>
                <div>
                    {isDisplayQR?<Qrform />:''}
                </div>
                <div>
                    {isDisplayInvoice?<InvoiceForm />:''}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayQR : state.showqr,
        isDisplayInvoice: state.showInvoice,
        tables: state.listTables
    }
}
export default connect(mapStateToProps,null)(App);
