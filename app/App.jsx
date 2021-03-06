'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SelectBox from './form/SelectBox.jsx';
import ReportBox from './report/ReportBox';
import NavComponent from './NavComponent';


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      activeComponent: 'select'
    }
    this.buttonClick = this.buttonClick.bind(this)
  }
  buttonClick(e){
    e.preventDefault();
    this.setState({activeComponent: e.target.value})
  }


  render(){
    var active;
    if(this.state.activeComponent === 'report') {
      active = <ReportBox />
    } else {
      active = <SelectBox />
    }
    var style = {
      color: 'black',
      fontSize: 200
    };

    return (
      <div >
        <NavComponent buttonClick={this.buttonClick} />
        <div className="container">
          <div >
            {active}
          </div>
        </div>
      </div>
    );
  }
}







{/*<Button buttonClick={this.buttonClick} />
<Widget ref="red" onChange={this.update} />
<New data={data}/>*/}
