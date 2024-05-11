import { Button } from "antd";
import { useEffect, useState, useRef } from "react";
import { v4 } from "uuid";

function index() {
  const timerRef = useRef(null);
  const [millisecond, setMillisecond] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [running, setRunning] = useState(false);
  const [lap, setLap] = useState([]);

  const changeMillisecond = (previous) => {
    if (previous === 99) {
      setSecond(changeSecond);
      return 0;
    }
    return previous + 1;
  };

  const changeSecond = (previous) => {
    if (previous === 59) {
      setMinute(changeMinute);
      return 0;
    }
    return previous + 1;
  };
  const changeMinute = (previous) => {
    if (previous === 59) {
      setHour((previous) => {
        return previous + 1;
      });
      return 0;
    }
    return previous + 1;
  };

  useEffect(() => {
    if (running)
      timerRef.current = setInterval(() => {
        setMillisecond(changeMillisecond);
      }, 10);
    else clearInterval(timerRef.current);
  }, [running]);
  const reset = () => {
    setMillisecond(0);
    setSecond(0);
    setMinute(0);
    setMinute(0);
  };
  const onLap = () => {
    setLap((previous) => {
      return [
        ...previous,
        {
          hour,
          minute,
          second,
          millisecond,
          id: v4(),
        },
      ];
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] h-[500px] bg-green-500 mt-[52px]">
        <div className="flex justify-center gap-[20px] text-7xl w-full mt-[20px]">
          <h3>{hour}</h3>:<h3>{minute}</h3>:<h3>{second}</h3>:
          <h3>{millisecond}</h3>
        </div>
        <div className="w-[80%] m-auto flex justify-between mt-[20px]">
          <Button onClick={onLap} type="primary">
            Lap
          </Button>
          {running ? (
            <Button onClick={() => setRunning(false)}>Pause</Button>
          ) : (
            <Button onClick={() => setRunning(true)}>Start</Button>
          )}

          <Button onClick={reset} danger type="primary">
            Restart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default index;
// 20-daqiqadan ko'r
