import React, {
  FC, useState, ChangeEvent, useEffect,
} from 'react';
import styles from './ToggleSwitch.module.scss';

export interface IToggleSwitch {
  onToggle: (isActive: boolean) => boolean | void;
  id: string;
  active?: boolean;
  disabled?: boolean;
}

const ToggleSwitch: FC<IToggleSwitch> = ({
  active = true, onToggle, id, disabled = false,
}) => {
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    if (disabled) {
      setIsActive(false);
    }
  }, [disabled]);

  const toggle = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setIsActive(checked);
    return onToggle(checked);
  };

  return (
    <>
      <input
        className={styles.checkbox}
        checked={isActive}
        onChange={toggle}
        id={id}
        type="checkbox"
        disabled={disabled}
      />
      <label className={styles.label} htmlFor={id}>
        <span className={styles.button} />
      </label>
    </>
  );
};

export default ToggleSwitch;
