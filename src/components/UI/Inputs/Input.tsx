import React, {
  ChangeEvent, FC, ReactNode, useState,
} from 'react';
import { Autocomplete, Types } from './Input.types';
import Label from '../Label/Label';
import styles from './Input.module.scss';
import IIcon from '../Icons/Icons.types';

export interface IInput {
  id: string;
  onChange: (inputValue: string) => void;
  IconComponent: FC<IIcon>;
  placeholder?: string;
  value?: string;
  name?: string;
  disabled?: boolean;
  type?: Types;
  autocomplete?: Autocomplete;
  required?: boolean;
  children?: ReactNode | null;
}

const Input: FC<IInput> = ({
  placeholder,
  disabled = false,
  value,
  onChange,
  children,
  IconComponent,
  type = Types.text,
  autocomplete = Autocomplete.off,
  required = false,
  id,
  name = id,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const change = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
    onChange(newInputValue);
  };

  return (
    <div className={styles.inputWrapper}>
      <Label classes={styles.label} htmlFor={id}>
      <IconComponent classes={styles.icon} height='18' width='18'/>
      <input type={type}
             id={id}
             placeholder={placeholder}
             disabled={disabled}
             value={inputValue}
             autoComplete={autocomplete}
             required={required}
             onChange={change}
             name={name}
             className={styles.input}
      />
        {children}
      </Label>
    </div>
  );
};

export default Input;
