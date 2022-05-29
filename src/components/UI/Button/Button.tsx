import React, { FC } from 'react';
import style from './Button.module.scss';

export interface IButton {
  children: string;
  type?: 'button' | 'submit';
  color?: 'primary' | 'secondary';
}

const Button: FC<IButton> = ({ children, type = 'button', color = 'primary' }) => (
  <button type={type} className={style.bg} color={color}>
    {children}
  </button>
);

export default Button;
