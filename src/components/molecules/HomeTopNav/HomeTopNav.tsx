import React from 'react';

import { DesignLink } from '@/components/atoms/DesignLink';

import styles from './HomeTopNav.module.css';

const HomeTopNav = () => {
  return (
    <div className={styles.navtop}>
      <div className={styles.leftLink}>
        <DesignLink linkHref="/#" linkText="HOME" />
      </div>
      <div className={styles.title}>
        <h1>THE LACHMANIUCU WEDDING</h1>
      </div>
      <div className={styles.rightLink}>
        <DesignLink linkHref="/#" linkText="CEREMONY" />
      </div>
    </div>
  );
};

export { HomeTopNav };
