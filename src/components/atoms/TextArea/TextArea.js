import React from 'react';
const TextArea = props => {
  const { title, id, getInputValues, placeholderText } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      <textarea
        className="form-control"
        onChange={getInputValues}
        required
        name={id}
        placeholder={placeholderText}
      />
    </div>
  );
};
export default TextArea;
