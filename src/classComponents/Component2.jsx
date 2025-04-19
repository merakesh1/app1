class Component2 extends React.Component {
  constructor(props) {
    super(props); // this will call the constructor of Component class or parent class
    this.state = {
      //intialize the state
      key: 'value',
      key1: 'value1',
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.key}</h1>
      </div>
    );
  }
}
