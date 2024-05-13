// import logo from './logo.svg';
// import './App.css';
// import { useDispatch } from 'react-redux';

// function App() {
//   let dispatch = useDispatch();
//   return (
//     <div className="App">
//     <input></input>
//     <button>add</button>
    
//     </div>
//   );
// }

// export default App;
import './App.css';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  let inputRef=useRef();
  let dispatch=useDispatch();
  let storeObj=useSelector((store)=>{return store});
  return (
    <div className="App">
      <h1>REDUX</h1>
     <h1>changes made</h1>
    </div>
  );
}

export default App;
