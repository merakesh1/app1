import { Component } from 'react';

class Component1 extends Component {
  display() {
    return 'hello';
  }
  render() {
    return (
      <div>
        <h1>{this.display()}! Welcome to Component1</h1>
      </div>
    );
  }
}

export default Component1;
