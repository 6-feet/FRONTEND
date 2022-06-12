import React, {
  FC, useEffect, useState,
} from 'react';
import Input, { IInput } from '../Input';
import Lock from '../../Icons/Lock';
import Show from '../../Icons/Show';
import Hide from '../../Icons/Hide';
import { Types } from '../Input.types';
import styles from './InputPassword.module.scss';

export interface IPassword extends Omit<IInput, 'IconComponent'>{
    show?: boolean;
}

const InputPassword: FC<IPassword> = ({
  id, onChange, show = false, value = '',
}) => {
  const [typeIs, setTypeIs] = useState<Types.text | Types.password>(Types.text);

  useEffect(() => {
    const currentType = show ? Types.text : Types.password;
    setTypeIs(currentType);
  }, [show]);

  const toggleShow = () => {
    const currentType = typeIs === Types.password ? Types.text : Types.password;
    setTypeIs(currentType);
  };

  const showOrHide = typeIs === Types.text ? <Show onClick={toggleShow} classes={styles.icon}/>
    : <Hide onClick={toggleShow} classes={styles.icon}/>;

  return (
      <Input id={id} onChange={onChange} type={typeIs} IconComponent={Lock} value={value}>
          {showOrHide}
      </Input>
  );
};

export default InputPassword;
