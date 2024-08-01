import React from 'react';

import { colors } from '@/types/colors';

type BodyTextVariants = 'body1' | 'body2' | 'body3';

type BodyTextProps = {
  text: string;
  variant: BodyTextVariants;
  color: keyof typeof colors;
};

const BodyText = ({ text, variant, color }: BodyTextProps) => {
  switch (variant) {
    case 'body3':
      return <p style={{ color: colors[color], fontSize: '1rem' }}>{text}</p>;
    case 'body2':
      return <p style={{ color: colors[color], fontSize: '1.5rem' }}>{text}</p>;
    case 'body1':
      return <p style={{ color: colors[color], fontSize: '2rem' }}>{text}</p>;
    default:
      return <p style={{ color: colors[color], fontSize: '1rem' }}>{text}</p>;
  }
};

export { BodyText };
