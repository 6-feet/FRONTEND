import React, { FC } from 'react';
import IIcon from './Icons.types';
import Colors from '../variables/colors';

const Call: FC<IIcon> = (
  {
    stroke = Colors.grayHigh,
    fill = Colors.none,
    classes,
    width = '22',
    height = '22',
    onClick,
  },
) => (
  <svg width={width} height={height} viewBox="0 0 22 22" fill={fill} onClick={onClick} className={classes} xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.5317 11.4724C14.5208 15.4604 15.4258 10.8467 17.9656 13.3848C20.4143 15.8328 21.8216 16.3232 18.7192 19.4247C18.3306 19.737 15.8616 23.4943 7.1846 14.8197C-1.49348 6.144 2.26158 3.67244 2.57397 3.28395C5.68387 0.173846 6.16586 1.58938 8.61449 4.03733C11.1544 6.5765 6.54266 7.48441 10.5317 11.4724Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

);

export default Call;
