import React, { FC } from 'react';
import IIcon from './Icons.types';
import Colors from '../variables/colors';

const Folder: FC<IIcon> = (
  {
    stroke = Colors.grayHigh,
    fill = Colors.none,
    classes,
    width = '18',
    height = '21',
    onClick,
  },
) => (
    <svg width={width} height={height} viewBox="0 0 21 21" fill={fill} xmlns="http://www.w3.org/2000/svg" className={classes} onClick={onClick}>
      <path fillRule="evenodd" clipRule="evenodd" d="M20.169 14.482C20.169 18.06 18.06 20.169 14.482 20.169H6.7C3.113 20.169 1 18.06 1 14.482V6.682C1 3.109 2.314 1 5.893 1H7.893C8.611 1.001 9.287 1.338 9.717 1.913L10.63 3.127C11.062 3.701 11.738 4.039 12.456 4.04H15.286C18.873 4.04 20.197 5.866 20.197 9.517L20.169 14.482Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.23096 13.2129H14.966" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default Folder;
