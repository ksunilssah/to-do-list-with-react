import React from 'react';
import Input from '../../atoms/Input';
import TextArea from '../../atoms/TextArea';
import DropDown from '../../atoms/DropDown';
import Button from '../../atoms/Button';
const AddTaskForm = props => {
  const options = [
    { label: 'Not started', value: 'notStarted' },
    { label: 'In progress', value: 'inProgress' },
    { label: 'Completed', value: 'completed' }
  ];

  const { getInputValues } = props;
  return (
    <div>
      <Input
        className="title"
        title="Title"
        getInputValues={event => {
          getInputValues(event);
        }}
        placeholder="title"
        id="title"
      />
      <TextArea
        id="description"
        title="Description"
        getInputValues={event => {
          getInputValues(event);
        }}
        placeholderText="Please add description"
      />

      <DropDown
        name="status"
        id="dropDown"
        optionArray={options}
        getInputValues={event => {
          getInputValues(event);
        }}
      />

      <div className="form-group mt-2">
        <Button buttonText="Submit" />
      </div>
    </div>
  );
};

export default AddTaskForm;
