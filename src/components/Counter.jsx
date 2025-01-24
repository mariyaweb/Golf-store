import { useState } from 'react';
import * as classes from './Counter.module.scss';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className={classes.btn}>
      <h1>{count}</h1>
      <button type="button" onClick={increment}>incr</button>
    </div>
  );
}

export default Counter;
