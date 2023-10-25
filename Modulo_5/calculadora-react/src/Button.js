import React from 'react';

const Button = ({ onClick, name, id, text }) => {
  return (
    <button onClick={onClick} id={id} name={name}>
      {text}
    </button>
  );
};

export default Button;
