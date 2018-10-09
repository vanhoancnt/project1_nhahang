import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const tableStyle ={
  width:300+'px',
  height:150+'px'
}
class App extends Component {
  render() {
    return (
      <div className="App">      
        <div class="row">
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <div className="card bg-success" style={tableStyle}>
                  <img className="card-img-top" src="" alt="" />
                  <div className="card-body">
                      <h4 className="card-title">Bàn 1</h4>
                      <a className="btn btn-primary">Đặt bàn</a> &nbsp;
                      <a className="btn btn-primary">Thanh toán</a>
                  </div>
              </div>

              <div className="card bg-success" style={tableStyle}>
                  <img className="card-img-top" src="" alt="" />
                  <div className="card-body">
                      <h4 className="card-title">Bàn 1</h4>
                      <a className="btn btn-primary">Đặt bàn</a> &nbsp;
                      <a className="btn btn-primary">Thanh toán</a>
                  </div>
              </div>

              <div className="card bg-success" style={tableStyle}>
                  <img className="card-img-top" src="" alt="" />
                  <div className="card-body">
                      <h4 className="card-title">Bàn 1</h4>
                      <a className="btn btn-primary">Đặt bàn</a> &nbsp;
                      <a className="btn btn-primary">Thanh toán</a>
                  </div>
              </div>

              <div className="card bg-success" style={tableStyle}>
                  <img className="card-img-top" src="" alt="" />
                  <div className="card-body">
                      <h4 className="card-title">Bàn 1</h4>
                      <a className="btn btn-primary">Đặt bàn</a> &nbsp;
                      <a className="btn btn-primary">Thanh toán</a>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
