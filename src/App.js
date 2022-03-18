import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter(props){
  const[count, setCount] =useState(50);
  const increaseCount = () =>setCount(count + 5);
  const decreaseCount = () =>setCount(count - 2);
  
  
  // const increaseCount = () =>{
  //     const newCount = count + 5;
  //     setCount(newCount);
  // }
  return(
    <div className='count'>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;
