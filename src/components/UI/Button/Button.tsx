import React, { FC } from 'react';
import styles from './Button.module.scss';

export interface IButton {
  children: string;
  type?: 'button' | 'submit';
  color?: 'primary' | 'secondary' | 'default';
  size?: 'small' | 'default';
}

const Button: FC<IButton> = ({ children, type = 'button', color = 'default', size = 'default' }) => {
  const classes = [styles.button, styles[size], styles[color]];

  return (
    <button type={type} className={classes.join('')}>
      {children}
    </button>
  );
};

export default Button;
