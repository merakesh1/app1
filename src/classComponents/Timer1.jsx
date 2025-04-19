import { Component } from 'react';

class Timer1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }

  componentDidMount() {
    console.log('Component is mounted');
    this.interval = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    console.log('Component is unmounted');
    clearInterval(this.interval);
    console.log('timer is cleared');
  }

  render() {
    return <h1>Seconds: {this.state.seconds}</h1>;
  }
}

export default Timer1;
