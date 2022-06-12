import React, { FC } from 'react';
import styles from './Button.module.scss';
import { Sizes, Types, Variants } from './Button.types';

export interface IButton {
  children: string;
  onClick: () => void;
  type?: Types;
  variant?: Variants;
  size?: Sizes;
  disabled?: boolean;
}

const Button: FC<IButton> = ({
  children,
  type = Types.button,
  variant = Variants.primary,
  size = Sizes.default,
  disabled = false,
  onClick,
}) => {
  const classes = [styles.button, styles[variant], styles[size]];

  return (
    <button type={type} disabled={disabled} className={classes.join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
