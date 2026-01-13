import React, { useState } from "react";

const Counter=()=>{
      const [count, setCount] = useState(0);
  const handleClick = (type) => {
    if (type === "inc") {
      setCount(count + 1);
    } else {
      if (count === 0) return;
      setCount(count - 1);
    }
  };

    return(
        <div className="justify-center w-1/4 left-0 right-0 m-auto mt-20 text-center">
       <h1 className="font-bold text-2xl mb-2">Counter</h1>
        <div className="flex items-center justify-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={() => handleClick("dec")}
          >
            -
          </button>
          <h1 className="font-bold text-2xl ml-2 mr-2">{count}</h1>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={() => handleClick("inc")}
          >
            +
          </button>
        </div>
      </div>
    )
}

export default Counter;