import React, { FC, useState, ChangeEvent } from 'react';
import { Types, Autocomplete } from './TextInput.types';

export interface ITextInput {
  placeholder: string;
  value: string;
  id: string;
  disabled?: boolean;
  type?: Types;
  autocomplete?: Autocomplete;
  callback: (inputValue: string) => any;
  required?: boolean;
}

const TextInput: FC<ITextInput> = ({
  placeholder,
  disabled = false,
  value,
  callback,
  type = Types.text,
  autocomplete = Autocomplete.off,
  required = false,
  id,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
    callback(newInputValue);
  };

  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      value={inputValue}
      autoComplete={autocomplete}
      required={required}
      onChange={handleChange}
    />
  );
};

export default TextInput;
