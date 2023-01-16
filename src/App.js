import React from "react"
import './App.css';
import { commonFunc } from "./actions/index";
import { useSelector,useDispatch } from "react-redux";

function App() {
const dispatch=useDispatch()
const mystate=useSelector((state)=>state.changeNumber)

  const handleClick = (type) => {
    if(type === 'INC'){
      dispatch(commonFunc('INC'))
    } else if(type === 'DEC'){
      dispatch(commonFunc('DEC'))
    }
  }


  return (
    <>
     <button onClick={()=>handleClick('INC')}>Increment</button>
     <input value={mystate}/>
     <button  onClick={()=>handleClick('DEC')}>Decrement</button>
    </>
   
  );
}

export default App;
