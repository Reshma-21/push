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
      <div>
      <input ref={inputRef}></input>
      </div>
      <br/>
      <div>
    <button onClick={()=>{
      dispatch({type:"addtollywoodActor",data:inputRef.current.value});
    }}>TollywoodActors</button>
    <button onClick={()=>{
      dispatch({type:"addbollywoodActors",data:inputRef.current.value});
    }}>bollywoodActors</button>
    </div>
    <h2>Tollywood Actors:{storeObj.tollywoodActors.join()}</h2>
    <h2>Bollwood Actors:{storeObj.bollywoodActors.join()}</h2>
    </div>
  );
}

export default App;
