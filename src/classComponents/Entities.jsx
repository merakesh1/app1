import { Component } from 'react';

class Entities extends Component {
  render() {
    return (
      <h1>
        This is {this.props.name} object{' '}
        {this.props.madeof === undefined ? '' : 'made of ' + this.props.madeof}
      </h1>
    );
  }
}

export default Entities;
