import { animated, useSpring } from '@react-spring/web';
import React, { useEffect, useState } from 'react';

import type { SlideHoverProps } from './types';

const SlideHover = ({ timing = 150, children }: SlideHoverProps) => {
  const [isBooped, setIsBooped] = useState(false);
  const [endBoop, setEndBoop] = useState(false);
  const style: React.CSSProperties = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    textDecoration: isBooped ? 'underline' : 'none',
    borderBottomWidth: isBooped ? '1px' : '0px',
    config: {
      tension: 300,
      friction: 10,
    },
  });

  useEffect(() => {
    if (!endBoop) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
      setEndBoop(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [endBoop, timing]);

  const trigger = () => {
    setIsBooped(true);
  };

  const endTrigger = () => {
    setEndBoop(true);
  };

  return (
    <animated.span onMouseOver={trigger} onMouseOut={endTrigger} style={style}>
      {children}
    </animated.span>
  );
};

export { SlideHover };
