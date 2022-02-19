import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, handleChangeProps, deleteTodoProps }) {
  return (
    <li className="d-flex">
      <input
        className="input-container"
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChangeProps(todo.id)}
      />

      <p className="description">{todo.title}</p>

      <button type="button" onClick={() => deleteTodoProps(todo.id)}>
        Delete
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
