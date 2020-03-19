import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  //!!! class components state Always is an OBJECT
  // usestate return
  // 1. current state snapshot
  // 2. function that allows you to update state
  // so... inputState[0] = current state snapshot

  // const [inputState, setInputState] = useState({title: '', amount: ''});

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({title:enteredTitle, amount: enteredAmount});
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" 
            id="title" 
            // value={inputState.title} 
            value = {enteredTitle}
            // onChange={ event => {
            //         const newTitle = event.target.value;
            //         setInputState(prevInputState => ({
            //         title: newTitle, 
            //         amount: prevInputState.amount
            //       }))
            // if we have two closure {} there, e.target will not be handed simulatenously so store valuable
            // }}
            onChange = {e=>{
              setEnteredTitle(e.target.value);
            }}
              />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" 
            id="amount" 
            value={enteredAmount} 
            onChange = { e => {
              setEnteredAmount(e.target.value);
            }

            }
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
