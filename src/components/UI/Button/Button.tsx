import React, { FC } from 'react';
import styles from './Button.module.scss';
import { Sizes, Types, Variants } from './Button.types';

export interface IButton {
    children: string;
    type?: Types;
    variant?: Variants;
    size?: Sizes;
    disabled?: boolean;
    callback: () => any;
}

const Button: FC<IButton> = ({ children, type = Types.button, variant = Variants.primary, size = Sizes.default, disabled = false, callback }) => {
  const classes = [
      styles.button,
      styles[variant],
      styles[size]
  ];

  return (
    <button type={type} disabled={disabled} className={classes.join(' ')} onClick={callback}>
      {children}
    </button>
  );
};

export default Button;
