import React, { FC, ReactNode } from 'react';

interface ILabel {
  htmlFor: string;
  children?: ReactNode;
  classes?: string;
}

const Label: FC<ILabel> = (
  {
    children,
    htmlFor,
    classes,
  },
) => <label className={classes} htmlFor={htmlFor}>{children}</label>;

export default Label;
