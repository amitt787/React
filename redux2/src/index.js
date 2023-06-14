// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import {createStore} from "redux";
var counter=(state=0,action)=>{
  if(action.type === "INC"){
    return state =state +action.payload;
  }else if (action.type === "DEC")
  {
    return state =state -action.payload;
  }
  // return state;

}
const  store=createStore(counter);
// store.subscribe(()=>{
  // console.log(store.getState())
// })
// console.log(store.getState())

store.dispatch({
  type:"INC",
  payload:1
})
 console.log(store.getState())

store.dispatch({
  type:"INC",
  payload:1
})
// console.log(store.getState())
store.dispatch({
  type:"INC",
  payload:1
})
// console.log(store.getState())


// console.log(store.getState())
store.dispatch({
  type:"DEC",
  payload:1
})
// console.log(store.getState())

//getState
//dispatch
//subscribe