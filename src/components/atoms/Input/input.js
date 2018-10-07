import React from 'react';

const Input = props => {
  const { title, getInputValues, id } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      <input
        name={id}
        className="form-control"
        required
        id={id}
        onChange={event => getInputValues(event)}
        placeholder={title}
      />
    </div>
  );
};

export default Input;
