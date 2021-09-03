import { useRef, useEffect } from "react";

export default function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    // eslint-disable-next-line no-return-assign
    return () => (isMounted.current = false);
  }, []);

  return isMounted;
}
