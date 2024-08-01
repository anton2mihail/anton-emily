import React from 'react';

import { DesignLink } from '@/components/atoms/DesignLink';

import styles from './FooterLinks.module.css';

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      <DesignLink linkHref="/#" linkText="RSVP" variant="secondary" />
      <DesignLink linkHref="/#" linkText="THEME" variant="secondary" />
      <DesignLink linkHref="/#" linkText="CEREMONY" variant="secondary" />
    </div>
  );
};

export { FooterLinks };
