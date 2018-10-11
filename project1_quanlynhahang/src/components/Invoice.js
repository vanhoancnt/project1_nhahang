import React, { Component } from 'react';
import './../App.css';
import { connect } from 'react-redux';
class Invoice extends Component {
    render() {
        return (
            <div>
                <div className="panel panel-success center">
                    <div className="panel-heading">
                        <h3 className="panel-title align_center">Hóa đơn bàn 1</h3>
                    </div>
                    <div className="panel-body align_left">
                        Panel content
                    </div>
                </div>
            </div>
        );
    }
}

export default Invoice;