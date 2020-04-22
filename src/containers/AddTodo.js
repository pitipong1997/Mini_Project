import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={
          e => {
            e.preventDefault();

            if (!input.value.trim()) {
              return
            }

            dispatch(addTodo(input.value));
            input.value='';
          }
        }
      >
        <h1 className='he'>Add Events</h1>
          <div className='container'>
            <input type="text" ref={el => (input = el)} />
            <button type='submit'>Add Events</button>
          </div>
      </form>
    </div>
  );
}

export default connect()(AddTodo);