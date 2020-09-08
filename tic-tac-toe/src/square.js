import React from 'react';

export function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      data-testid={'square-' + props.id}
    >
      {props.value}
    </button>
  );
}
