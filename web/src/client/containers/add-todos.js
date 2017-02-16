import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { addTodo } from '../actions';

const propTypes = {
  dispatch: PropTypes.func,
};

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <Button type="submit">
          Add Todo
        </Button>
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);

AddTodo.propTypes = propTypes;

export default AddTodo;
