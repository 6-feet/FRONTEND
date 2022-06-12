import React, { FC } from 'react';
import IIcon from './Icons.types';
import Colors from '../variables/colors';

const Lock: FC<IIcon> = (
  {
    width = '18',
    height = '20',
    fill = Colors.none,
    stroke = Colors.grayHigh,
    classes,
    onClick,
  },
) => (
  <svg width={width} height={height} viewBox="0 0 18 20" fill={fill} xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={classes}>
    <path d="M13.4232 7.4478V5.3008C13.4232 2.7878 11.3852 0.7498 8.87225 0.7498C6.35925 0.7388 4.31325 2.7668 4.30225 5.2808V5.3008V7.4478" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.683 19.2496H5.042C2.948 19.2496 1.25 17.5526 1.25 15.4576V11.1686C1.25 9.07359 2.948 7.37659 5.042 7.37659H12.683C14.777 7.37659 16.475 9.07359 16.475 11.1686V15.4576C16.475 17.5526 14.777 19.2496 12.683 19.2496Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.86279 12.2027V14.4237" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Lock;
