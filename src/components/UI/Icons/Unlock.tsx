import React, { FC } from 'react';
import IIcon from './Icons.types';
import Colors from '../variables/colors';

const Unlock: FC<IIcon> = (
  {
    width = '18',
    height = '21',
    fill = Colors.none,
    stroke = Colors.grayHigh,
    onClick,
    classes,
  },
) => (
  <svg width={width} height={height} viewBox="0 0 18 21" fill={fill} xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={classes}>
    <path d="M13.4242 4.56204C12.8072 2.78004 11.1142 1.50004 9.12225 1.50004C6.60925 1.49004 4.56325 3.51804 4.55225 6.03104V6.05104V8.19804" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.933 20.0005H5.292C3.198 20.0005 1.5 18.3025 1.5 16.2075V11.9195C1.5 9.82446 3.198 8.12646 5.292 8.12646H12.933C15.027 8.12646 16.725 9.82446 16.725 11.9195V16.2075C16.725 18.3025 15.027 20.0005 12.933 20.0005Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.11279 12.9526V15.1746" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>);

export default Unlock;
