import React from 'react';
import { connect } from 'react-redux';
import { changeStatus } from './CardActions';

const Card = ({ title, description, status, id, changeStatus }) => {
  let notStarted = status === 'notStarted' ? true : false;
  let inProgress = status === 'inProgress' ? true : false;
  let completed = status === 'completed' ? true : false;

  const changeHandler = e => {
    changeStatus({
      status: e.target.value,
      id,
      title,
      description
    });
  };

  return (
    <div className="box">
      <h5>{title}</h5>

      <p>{description} </p>
      <div className="form-group">
        <select
          name="status"
          id={id}
          className="form-control"
          onChange={changeHandler}
        >
          <option selected={notStarted} value="notStarted">
            Not started
          </option>
          <option selected={inProgress} value="inProgress">
            In progress
          </option>
          <option selected={completed} value="completed">
            Completed
          </option>
        </select>
      </div>
    </div>
  );
};

export default connect(
  null,
  { changeStatus }
)(Card);
