import { useCallback, useRef } from "react";

export const useThrottle = (callback, delay) => {
  const lastCallTimeRef = useRef(null);
  const timeoutRef = useRef(null);

  const throttledFunction = useCallback(
    (...args) => {
      const now = Date.now();
      const lastCallTime = lastCallTimeRef.current;
      const timeSinceLastCall = lastCallTime ? now - lastCallTime : null;
      const timeUntilNextCall = delay - timeSinceLastCall;

      if (timeSinceLastCall === null || timeSinceLastCall >= delay) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        callback(...args);
        lastCallTimeRef.current = now;
      } else if (!timeoutRef.current) {
        timeoutRef.current = setTimeout(() => {
          callback(...args);
          lastCallTimeRef.current = Date.now();
          timeoutRef.current = null;
        }, timeUntilNextCall);
      }
    },
    [callback, delay]
  );

  return throttledFunction;
};
