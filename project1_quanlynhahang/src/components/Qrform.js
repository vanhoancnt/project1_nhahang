import React, { Component } from 'react';
import './../App.css';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class Qrform extends Component {

    onClose=()=>{
        this.props.onClose();
    }
    render() {
        var React = require('react');
        var QRCode = require('qrcode.react');
        return (
            <div>
                <div className="center mt-100">
                    <div className="panel panel-info align_center">
                        <div className="panel-heading">
                            <h3 className="panel-title">Thông tin đặt bàn</h3>
                        </div>
                        <div className="panel-body">
                            <div>
                                <QRCode value="http://facebook.github.io/react/" />
                            </div>
                        </div>
                    </div>
                    
                    <button type="button" className="btn btn-danger align_right" onClick={this.onClose}>Close</button>
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClose: () => {
            dispatch(actions.toogleTable());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Qrform);
