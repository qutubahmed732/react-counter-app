import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date('2024-09-15'));

  // set function
  function setIncrementHandler() {
    setValue(value + 1);
  }

  function setDecrementHandler() {
    setValue(value - 1);
  }

  // count functions
  function incrementHandler() {
    setCount(count + value);

    // Update the date by adding count value to the current date
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + value);
    setDate(newDate);
  }

  function decrementHandler() {
    setCount(count - value);

    // Update the date by subtracting count value from the current date
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() - value);
    setDate(newDate);
  }

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <>
      <div className='container'>
        <div className='set'>
          <button onClick={setDecrementHandler} className='minus'>-</button>
          <div>SET : {value}</div>
          <button onClick={setIncrementHandler} className='plus'>+</button>
        </div>
        <div className='count'>
          <button onClick={decrementHandler} className='minus'>-</button>
          <div>Count : {count}</div>
          <button onClick={incrementHandler} className='plus'>+</button>
        </div>
        <p>Today is {daysOfWeek[date.getDay()]} {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}</p>
      </div>
    </>
  );
}

export default App;



