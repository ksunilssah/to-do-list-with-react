import React from 'react';

const Button = props => {
  const { buttonText } = props;
  return <button className="btn btn-primary">{buttonText}</button>;
};

export default Button;
