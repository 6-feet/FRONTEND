import React, { FC } from 'react';
import IIcon from './Icons.types';
import Colors from '../variables/colors';

const Hide: FC<IIcon> = (
  {
    width = '20',
    height = '18',
    fill = Colors.none,
    stroke = Colors.grayHigh,
    onClick,
    classes,
  },
) => (
    <svg width={width} height={height} viewBox="0 0 20 18" fill={fill} xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={classes}>
      <path d="M7.76045 11.3668C7.18545 10.7928 6.83545 10.0128 6.83545 9.1378C6.83545 7.3848 8.24745 5.9718 9.99945 5.9718C10.8664 5.9718 11.6644 6.3228 12.2294 6.8968" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.1049 9.69885C12.8729 10.9889 11.8569 12.0069 10.5679 12.2409" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.65451 14.4723C3.06751 13.2263 1.72351 11.4063 0.749512 9.13729C1.73351 6.85829 3.08651 5.02829 4.68351 3.77229C6.27051 2.51629 8.10151 1.83429 9.99951 1.83429C11.9085 1.83429 13.7385 2.52629 15.3355 3.79129" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.4473 5.99078C18.1353 6.90478 18.7403 7.95978 19.2493 9.13678C17.2823 13.6938 13.8063 16.4388 9.99929 16.4388C9.13629 16.4388 8.28529 16.2988 7.46729 16.0258" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.8868 1.24957L2.11279 17.0236" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

);

export default Hide;
