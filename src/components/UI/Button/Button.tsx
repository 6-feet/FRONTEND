import React, { FC } from 'react';
import styles from './Button.module.scss';

export interface IButton {
  children: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'default-variant';
  size?: 'small' | 'default' | 'rounded';
  disabled?: boolean;
}

const Button: FC<IButton> = ({ children, type = 'button', variant = 'primary', size = 'default', disabled = false }) => {
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
