import React, { FC } from 'react';

export interface IButton {
  children: string;
}

const Button: FC<IButton> = ({ children }) => <button>{children}</button>;

export default Button;
