import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddTaskForm from '../../molecules/AddTaskForm';
import { AddNewTask } from './AddTaskActions';

class AddTask extends Component {
  state = {
    title: '',
    description: '',
    status: 'notStarted'
  };

  getInputValues = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  getComments = e => {
    e.preventDefault();
    const details = {
      ...this.state,
      id: new Date()
        .getTime()
        .toString()
        .substr(-3)
    };
    this.props.AddNewTask(details);
    //  this.props.ShowAddTaskForm(false);
    e.target.reset();
    this.props.history.push('/task-list');
  };

  render() {
    return (
      <form className="col-5 box" onSubmit={this.getComments}>
        <AddTaskForm getInputValues={this.getInputValues} />
      </form>
    );
  }
}

export default withRouter(
  connect(
    null,
    { AddNewTask }
  )(AddTask)
);
