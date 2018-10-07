import React, { Component } from 'react';
import CardsHolder from '../templates/CardsHolder';
import Layout from '../HOC';
class TaskList extends Component {
  render() {
    return (
      <Layout>
        <CardsHolder />
      </Layout>
    );
  }
}
export default TaskList;
