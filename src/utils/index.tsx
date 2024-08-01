import { useEffect, useRef } from 'react';

type IntersctionObserverProps = {
  toObserve: React.RefObject<HTMLDivElement>;
  onIntersect: IntersectionObserverCallback;
};

const useIntersecionObserver = ({
  toObserve,
  onIntersect,
}: IntersctionObserverProps) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(onIntersect, {
      threshold: 1,
      root: null,
    });
    observer.current.observe(toObserve.current!);

    return () => {
      observer.current!.disconnect();
    };
  }, [onIntersect, toObserve]);
};

export { useIntersecionObserver };
