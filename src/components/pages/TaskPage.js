import React, { Component } from 'react';
import AddTasks from '../templates/AddTasks';
import Layout from '../HOC';
class TaskPage extends Component {
  render() {
    return (
      <Layout>
        <AddTasks />
      </Layout>
    );
  }
}
export default TaskPage;
