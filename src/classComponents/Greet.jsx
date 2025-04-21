import { Component } from 'react';
class Greet extends Component {
  render() {
    return (
      <div>
        <h3>We are pleased to have you here {this.props.name}!</h3>
      </div>
    );
  }
}

Greet.defaultProps = {
  name: 'Guest',
};

export default Greet;
