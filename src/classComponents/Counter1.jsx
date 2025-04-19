import { Component } from 'react';
class Counter1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
    console.log('state changed from', prevState.count, 'to', this.state.count);
  }
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <h4>Count: {this.state.count}</h4>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter1;
