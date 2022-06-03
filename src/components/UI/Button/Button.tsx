import React, { FC } from 'react';
import styles from './Button.module.scss';
import { Sizes, Types, Variants } from './Button.types';

interface IButton {
    children: string;
    type?: Types;
    variant?: Variants;
    size?: Sizes;
    disabled?: boolean;
}

const Button: FC<IButton> = ({ children, type = Types.button, variant = Variants.primary, size = Sizes.default, disabled = false }) => {
  const classes = [
      styles.button,
      styles[variant],
      styles[size]
  ];

  if (disabled) {
      classes.push(styles.disabled);
  }

  return (
    <button type={type} disabled={disabled} className={classes.join(' ')}>
      {children}
    </button>
  );
};

export default Button;
