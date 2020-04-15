import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
  var time = this.state.date;
  var ampm;
  if(time.getHours() >= 12) {
    ampm = "pm";
  } else {
      ampm = "am";
  }

  if(time.getHours() > 12) {
    time.setHours(time.getHours() - 12);
  }
  
    return (
      <div>
        <h2>The time is {time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()+" "+ampm}.</h2>
      </div>
    );
  }
}

export default App;
