import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../organisms/Cards';

class CardsHolder extends Component {
  getNotStartedList = () => {
    return this.props.taskList.map(card => {
      if (card.status === 'notStarted') {
        return <Card key={card.id} {...card} />;
      } else {
        return null;
      }
    });
  };
  getInProgressList = () => {
    return this.props.taskList.map(card => {
      if (card.status === 'inProgress') {
        return <Card key={card.id} {...card} />;
      } else {
        return null;
      }
    });
  };

  getCompletedList = () => {
    return this.props.taskList.map(card => {
      if (card.status === 'completed') {
        return <Card key={card.id} {...card} />;
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h4>Not Started</h4>
            {this.getNotStartedList()}
          </div>
          <div className="col-4">
            <h4>In progress</h4>
            {this.getInProgressList()}
          </div>
          <div className="col-4">
            <h4>Completed</h4>
            {this.getCompletedList()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskList: state.taskList
  };
};

export default connect(mapStateToProps)(CardsHolder);
