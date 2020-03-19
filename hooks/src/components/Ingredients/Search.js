import React, {useState, useEffect} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  console.log(props);
  // {onloadIngredients: f}
  const { onloadIngredients } = props;
  // extract one function inside { }
  console.log(onloadIngredients);
  const [enteredFilter, setEnteredFilter] = useState('');

  //-------
  // object destructuring
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  let obj = {foo: '009', bar:'933'};
  const { foo } = obj;
  console.log(foo);
  // = 009

  let objct = [1];
  const [bar] = objct;
  console.log(bar);
  // = 1

  obj = {foo: 'changed'};
  console.log(foo);
  // = 009
  //-------

  useEffect(() => {
    const query = enteredFilter.length === 0 
    ? ''
    : `?orderBy="title"&equalTo="${enteredFilter}"`;
    fetch('https://practice-react-ingredients.firebaseio.com/ingredients.json' + query).then(
      response => response.json()
    ).then(responseData => {
      const loadedIngredients = [];
      for (const key in responseData) {
        loadedIngredients.push({
          id: key,
          title: responseData[key].title,
          amount: responseData[key].amount
        });
      }
      // if you use this here, 
      // every time parent component rerendered then 
      // functions created again so
      // this useeffect run again n again...
      // so we use useCallback
      onloadIngredients(loadedIngredients);
    });
  }, [enteredFilter, onloadIngredients]);
  // if [enteredFilter, props.onLoadIngredients] then re-render every time
  // all new ingredients added
  // const {xxxxx} = props; is Object restructuring
  // right side stored as separate variable

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={enteredFilter} 
          onChange={e => {setEnteredFilter(e.target.value);
          }}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
