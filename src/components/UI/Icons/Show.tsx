import React, { FC } from 'react';
import IIcon from './Icons.types';
import Colors from '../variables/colors';

const Show: FC<IIcon> = (
  {
    width = '20',
    height = '17',
    fill = Colors.none,
    stroke = Colors.grayHigh,
    onClick,
    classes,
  },
) => (
  <svg width={width} height={height} viewBox="0 0 20 17" fill={fill} xmlns="http://www.w3.org/2000/svg" className={classes} onClick={onClick}>
    <path fillRule="evenodd" clipRule="evenodd" d="M13.1614 8.05311C13.1614 9.79911 11.7454 11.2141 9.99938 11.2141C8.25338 11.2141 6.83838 9.79911 6.83838 8.05311C6.83838 6.30611 8.25338 4.89111 9.99938 4.89111C11.7454 4.89111 13.1614 6.30611 13.1614 8.05311Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M9.998 15.3549C13.806 15.3549 17.289 12.6169 19.25 8.05292C17.289 3.48892 13.806 0.750916 9.998 0.750916H10.002C6.194 0.750916 2.711 3.48892 0.75 8.05292C2.711 12.6169 6.194 15.3549 10.002 15.3549H9.998Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Show;
