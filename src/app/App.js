import style from './App.module.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { hitCountUrl, getCountUrl } from '../utils/Url';

/***
 * This is a proof of concept for a counting application.
 */
function App() {

  const [ count, setCount ] = useState();

  // on load, fetch count from the url.
  useEffect(() => {
    const fetchCount = async () => {
      const result = await axios(
        `${getCountUrl}`
      );
      setCount(result.data.value);
    };
    fetchCount();
    }, []);

  // When the hit button is clicked, fetch and increment count from the url.
  const incrementCount = async () => {
    const result = await axios(
      `${hitCountUrl}`
    );
    setCount(result.data.value);
  };

  return (
    <div className= {style.body}>
      <p className= {style.text}>Number Of Hits</p>
     <div className= {style.count}>{count}</div>
     <button onClick={incrementCount} className={style.button}>Hit</button>
    </div>
  );
}

export default App;

