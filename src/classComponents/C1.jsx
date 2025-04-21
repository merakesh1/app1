import { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>Click me to see the change..</button>
    );
  }
}

export default Child;
