import React from 'react';
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }
  componentDidMount() {
    console.log('Component is mounted');
    setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }
  render() {
    return <h1>Seconds: {this.state.seconds}</h1>;
  }
}

export default Timer;
