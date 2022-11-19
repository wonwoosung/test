import { useEffect, useRef } from "react";

const useInterval = (callback, delay, counter) => {
    const savedCallback = useRef(null);
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      const executeCallback = () => {
        savedCallback.current();
      };
  
      const timerId = setInterval(executeCallback, delay);
  
      return () => clearInterval(timerId);
    }, [counter]);
  };

export default useInterval;