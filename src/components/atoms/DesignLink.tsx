import type { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React from 'react';

import styles from './DesignLink.module.css';

type DesignLinkProps = {
  linkHref: Url;
  linkText: string;
  variant?: 'default' | 'secondary';
};

const DesignLink = ({
  linkHref,
  linkText,
  variant = 'default',
}: DesignLinkProps) => {
  return (
    <div
      className={`${styles.designLink} ${variant === 'secondary' ? styles.justifyEnd : ''}`}
    >
      <Link
        className={`${variant === 'secondary' ? styles.clr_primary200 : ''}`}
        href={linkHref}
      >
        {linkText}
      </Link>
      <span
        className={`${styles.doubleDash} ${variant === 'secondary' ? styles.bg_primary200 : ''}`}
      />
    </div>
  );
};

export { DesignLink };
