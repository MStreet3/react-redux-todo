import React, { Component } from 'react';

class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }
  handleClick(e) {
    e.preventDefault();
    this.props.addComment(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="todo"
          value={this.state.message}
          onChange={this.handleChange}
        />

        <button
          className="btn-round"
          type="button"
          onClick={(e) => this.handleClick(e)}
        >
          Add Task
        </button>
      </div>
    );
  }
}

export default AddToDo;
