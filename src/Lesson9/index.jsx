// 18-daqiqa
import { Button } from "antd";
import { useState, useEffect } from "react";

function Lesson9() {
  const [count, setCount] = useState(1);
  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };
  useEffect(() => {
    console.log("Count", count);
  }, []);

  return (
    <div className="w-[100wv] h-[100vh] flex items-center justify-center">
      <div className="flex gap-[20px] items-center justify-center">
        <Button onClick={decreament} type="primary" danger>
          -
        </Button>
        {count}
        <Button onClick={increament} type="primary">
          +
        </Button>
      </div>
    </div>
  );
}

export default Lesson9;
// STATE => FUNCTIONAL COMPONENT
// USE = hook deb ham ishlatiladi:
// useEffect, useState, useReducer
// effectHook, stateHook, reducerHook.
// finish it on Thursday
// useEffect - eventListener
