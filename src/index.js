import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'; 
import allReducer from './reducers';
import { Provider } from 'react-redux'; //connect global state to our entire App




// Store-> is basically a globaslised state, hold all the data/state for our application
// import { createStore } from 'redux';

//Action->Describes what u wanna do, Just declare the action to be executed
// const increment = () =>{
//   return{
//     type:'INCREMENT'
//   }
// }
// const decrement = () =>{
//   return{
//     type:'DECREMENT'
//   }
// }


// Reducer->It basically describe how actions describe from actions to next actions, Real code is done here like add or subtract
// check which action is to be executed and basede on this execute codes
// const counter = ( state=0, action) =>{

//   switch(action.type){
//     case "INCREMENT":
//       return state+1;
//     case 'DECREMENT':
//       return state-1;
//   }

// }

// let store=createStore(counter);

//display in console
// store.subscribe(()=> console.log(store.getState()));
//Dispatch->Execute the action, call the method for executing action
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

const store= createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
