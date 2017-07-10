"use strict"
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

//IMPORT COMBINED Reducers
import reducers from './reducers/index';
// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

//STEP 3 define the reducers


// STEP 1 Create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// store.subscribe(function(){
//   console.log("Current state is : ", store.getState());
// });


//STEP 2 create and dispatch actions
store.dispatch(postBooks(
  [{
    id: 1,
    title: 'this is book title',
    description: 'this is book description',
    price: 33.33
  },
  {
    id: 2,
    title: 'this is second book title',
    description: 'this is second book description',
    price: 50

  }]
))
// DELETE A BOOK
store.dispatch(deleteBooks(
  {id: 1}
))

// UPDATE a book
store.dispatch(updateBooks(
  {
    id: 2,
    title: 'Learn React in 24h'
  }
))

// CART action
store.dispatch(addToCart([{id: 1}]))
