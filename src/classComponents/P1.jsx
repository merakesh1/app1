import { Component } from 'react';
import Child from './C1';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'login!',
    };
  }

  handleClick = () => {
    this.setState({
      message: this.state.message === 'login!' ? 'logout!' : 'login!',
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome!</h2>
        <h3>{this.state.message}</h3>
        <Child onClick={this.handleClick} />
      </div>
    );
  }
}

export default Parent;
