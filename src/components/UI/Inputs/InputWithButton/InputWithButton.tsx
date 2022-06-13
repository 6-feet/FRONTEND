import React, { FC } from 'react';
import Input, { IInput } from '../Input';
import Button from '../../Button/Button';
import { Sizes, Variants } from '../../Button/Button.types';
import styles from './InputWithButton.module.scss';

export interface IInputWithButton extends IInput {
  buttonText: string;
  onClickButton: () => void;
  buttonDisabled?: boolean;
}

const InputWithButton: FC<IInputWithButton> = (
  {
    id,
    buttonText,
    onClickButton,
    buttonDisabled = false,
    value,
    onChange,
    IconComponent,
  },
) => (
    <div className={styles.wrapper}>
      <Input id={id}
             value={value}
             onChange={onChange}
             IconComponent={IconComponent}
             classes={styles.input}
      />
      <Button onClick={onClickButton}
              size={Sizes.small}
              disabled={buttonDisabled}
              variant={Variants.secondary}
              classes={styles.button}
      >
        {buttonText}
      </Button>
    </div>
);

export default InputWithButton;
