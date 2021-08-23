import React, { Component } from 'react';
import { render } from 'react-dom';
import LiveClock from './LiveClock';
import Title from '../pages/admin/Title';

export default class DateTime extends Component {
  constructor() {
    var today = new Date(),
    date = 'Date: ' + today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    super()
    this.state = {
      currentDate: date
    }
  }  
  render() {
    return (
      <div>
        <Title>Time Stamp</Title>

        <p style={{fontSize:20, color:'#606060', wordSpacing:7, letterSpacing:2}}>
          { this.state.currentDate }
        </p>
        <div style={{fontSize:20, color:'#606060', wordSpacing:7, letterSpacing:2}}>
            <p>Time: 
            <LiveClock/>
            (Pakistan Standard Time)
            </p>
        </div>
      </div>
    );
  }
}
render(<DateTime />, document.getElementById('root'));