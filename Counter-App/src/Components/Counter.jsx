import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const textColor = count >= 0 ? "green" : "red";

  return (
    <>
      <div className="h-[500px] w-[100%] flex justify-center items-center">
        <div className="border border-black w-[40%] h-auto flex flex-col items-center">
          <h1 className="text-3xl font-extrabold m-2 ">Counter</h1>
          <div className="flex flex-col items-center">
            <h2 style={{ color: textColor }} className="text-3xl font-bold">
              {count}
            </h2>
            <div className="flex items-center gap-8 m-3">
              <button
                onClick={handleDecrement}
                className="border border-solid border-black rounded-[8px] p-1"
              >
                Decrement
              </button>
              <button
                onClick={handleReset}
                className="border border-solid border-black rounded-[8px] p-1"
              >
                Reset
              </button>
              <button
                onClick={handleIncrement}
                className="border border-solid border-black rounded-[8px] p-1"
              >
                Increment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
