import React from 'react';

import { DesignLink } from '@/components/atoms/DesignLink';

import styles from './FooterTitle.module.css';

const FooterTitle = () => {
  return (
    <div className={styles.footerTitle}>
      <div>
        <div className={styles.footerLinks}>
          <DesignLink linkHref="/#" linkText="RSVP" variant="secondary" />
          <DesignLink linkHref="/#" linkText="THEME" variant="secondary" />
          <DesignLink linkHref="/#" linkText="CEREMONY" variant="secondary" />
        </div>
        <p className={styles.footerTitleDate}>March 1st, 2025</p>
        <h1 className={styles.footerTitleText}>The Lachmaniucu Wedding</h1>
        <hr className={styles.footerTitleHr} />
        <p className={styles.footerSubtext}>
          Designed and built by Anton Lachmaniucu and Emily Vos
        </p>
      </div>
    </div>
  );
};

export { FooterTitle };
