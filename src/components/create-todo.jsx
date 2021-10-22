import React, { Component } from 'react';

class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    }

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    })
  }

  onChangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    console.log('form submitted');
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_description}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);

    this.setState({
      todo_responsible: "",
      todo_priority: "",
      todo_description: "",
      todo_completed: false
    })
  }


  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value
    })
  }

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="todo-description">Description</label>
            <input type="text" className="form-control" value={this.state.todo_description} onChange={this.onChangeTodoDescription} placeholder="Enter description" />
          </div>
          <div className="form-group">
            <label htmlFor="todo-responsible">Responsible</label>
            <input type="text" className="form-control" value={this.state.todo_responsible} onChange={this.onChangeTodoResponsible} placeholder="Enter responsible" />
          </div>
          <div className="form-group">
            <label htmlFor="todo-priority" style={{marginRight: "50px"}}>Priority</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" id="priorityLow" name="priorityOptions" value="Low" checked={this.state.todo_priority==='Low'} onChange={this.onChangeTodoPriority}/>
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" id="priorityMedium" name="priorityOptions" value="Medium" checked={this.state.todo_priority==='Medium'} onChange={this.onChangeTodoPriority}/>
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" id="priorityHigh" name="priorityOptions" value="High" checked={this.state.todo_priority==='High'} onChange={this.onChangeTodoPriority}/>
              <label className="form-check-label">High</label>
            </div>
          </div>
          <button type="submit" value="Create Todo" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default CreateTodo;
