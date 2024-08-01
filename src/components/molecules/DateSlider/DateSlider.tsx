/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { animated, useSpring } from '@react-spring/web';
import React, { useCallback, useRef, useState } from 'react';
import useMeasure from 'react-use-measure';

import { useIntersecionObserver } from '@/utils';

import styles from './DateSlider.module.css';

const DateSlider = () => {
  const localRef = useRef<HTMLDivElement>(null);
  const [open, toggle] = useState(false);
  const [ref, { width }] = useMeasure();
  const props = useSpring({ width: open ? width : 0, delay: 200 });
  const onIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      // @ts-ignore
      if (entries[0].isIntersecting) {
        if (!open) {
          toggle(true);
        }
      } else {
        toggle(false);
      }
    },
    [open],
  );
  useIntersecionObserver({
    toObserve: localRef,
    onIntersect,
  });

  return (
    <div ref={localRef} className={styles.dateSlider}>
      <div className={styles.leftBox}>
        <h1>Lachmaniucu</h1>
      </div>
      <div ref={ref} className={styles.middleLineBox}>
        <animated.div className={styles.middleLine} style={props} />
        <p className={styles.middleLineDate}>March 1st, 2025</p>
      </div>
      <div className={styles.rightBox}>
        <h1>Wedding</h1>
      </div>
    </div>
  );
};

export { DateSlider };
