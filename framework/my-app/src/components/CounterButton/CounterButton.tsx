import { useState } from "react";

export const CounterButton = () => {
    const [count, setCount] = useState<number>(0);

    let myCount = 0;
    let incMyCount = () => myCount++;

    return <button
          type="button"
          className="counter"
          onClick={incMyCount}
        >
          Count is {myCount}
        </button>

}