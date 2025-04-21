import { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: '',
    };
  }
  handleInput = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  addTodo = () => {
    if (this.state.input !== '') {
      if (this.state.input.trim()) {
        this.setState({
          todos: [...this.state.todos, this.state.input],
          input: '',
        });
      }
    } else {
      alert('Please add some task to continue...');
    }
  };

  componentDidMount() {
    console.log('TodoList is mounted...');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      console.log('Todos is updated:', this.state.todos);
    }
  }

  render() {
    return (
      <div>
        <div>
          <h2>Todos List</h2>
          <input
            type='text'
            value={this.state.input}
            onChange={this.handleInput}
            placeholder='Add a task..'
          />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <div>
          <ul>
            {this.state.todos.length > 0 ? (
              /* this.state.todos.map((todo, index) =>
                <li key={index}>{todo}</li>
              ) */
              this.state.todos.map((todo, index) => {
                return <li key={index}>{todo}</li>;
              })
            ) : (
              <>
                <h3>no tasks found</h3>
              </>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
