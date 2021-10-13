import { useState, useEffect, useCallback } from 'react';

interface windowSizeProperties {
  width: number | undefined;
  height: number | undefined;
}

// Hook
export default function useWindowSize(): windowSizeProperties {
  const isClient = typeof window === 'object';

  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }, [isClient]);

  const [windowSize, setWindowSize] = useState(getSize());

  useEffect((): any | void => {
    if (!isClient) return false;

    const handleResize = () => setWindowSize(getSize);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSize, isClient]);

  return windowSize;
}
