import React, { Component } from 'react';
import Table from './components/Table';
import Qrform from './components/Qrform';
import Invoice from './components/Invoice';
import './App.css';
import {connect} from 'react-redux';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tables: []
        }
    }

    generateData = () => { // du lieu mau
        var randomstring = require("randomstring");
        var tables = [
            {
                id: randomstring.generate(),
                index: 1,
                status: false,
                loginCode: -1
            },
            {
                id: randomstring.generate(),
                index: 2,
                status: true,
                loginCode: -1
            },
            {
                id: randomstring.generate(),
                index: 3,
                status: false,
                loginCode: -1
            },
            {
                id: randomstring.generate(),
                index: 4,
                status: false,
                loginCode: -1
            },
            {
                id: randomstring.generate(),
                index: 5,
                status: true,
                loginCode: -1
            }
        ];
        this.setState({
            tables: tables
        });
    }
    componentWillMount() {
        this.generateData();
    }
    render() {
        var {isDisplay} = this.props;
        var { tables } = this.state;
        var eleTables = tables.map((table, index) => {
            return <Table key={table.id} index={index} table={table} />
        });
        return (
            <div>
                <div className="mt-100 ml-200 flex-container">
                    {eleTables}
                </div>
                <div>
                    {isDisplay?<Qrform />:''}
                </div>
                <div>
                    <Invoice />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplay : state.toogle_table
    }
}
export default connect(mapStateToProps,null)(App);
