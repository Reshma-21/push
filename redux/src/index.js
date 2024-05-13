// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createStore} from 'redux';
// import { Provider } from 'react-redux';
 

// let initialStoreObj={
//   actors:[],
//   singers:[],
//   directors:[],
// };
// let reducer=(latestStoreObj=initialStoreObj,dispatchedObj)=>{
//   return latestStoreObj;
// };
// let store = createStore(reducer);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//      <App/>
//   </Provider>
// );
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
let initialStoreObj={
  tollywoodActors: [],
  bollywoodActors: [],
}

let reducer=(latestStoreObj=initialStoreObj,dispatchedObj)=>{
console.log("inside reducer");
console.log(dispatchedObj);
if(dispatchedObj.type=="addtollywoodActor"){
return {...latestStoreObj,tollywoodActors:latestStoreObj.tollywoodActors.concat([dispatchedObj.data])}
}else if(dispatchedObj.type=="addbollywoodActors"){
  return {...latestStoreObj,bollywoodActors:latestStoreObj.bollywoodActors.concat([dispatchedObj.data])}
}
  return latestStoreObj;
};

let store=createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
</Provider>
);
