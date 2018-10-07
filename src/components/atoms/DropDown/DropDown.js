import React from 'react';

const DropDown = props => {
  const {
    optionArray,
    name,
    getInputValues,
    id,
    defaultText,
    selected
  } = props;
  return (
    <div className="form-group">
      <select
        name={name}
        id={id}
        className="form-control"
        onChange={event => getInputValues(event)}
        defaultValue={selected || ''}
      >
        {defaultText ? <option value="">{defaultText}</option> : ''}
        {optionArray.map(item => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
