import React, {
  FC, useState, ChangeEvent, useEffect,
} from 'react';
import styles from './ToggleSwitch.module.scss';

export interface IToggleSwitch {
  active?: boolean;
  callback: (isActive: boolean) => boolean | void;
  id: string;
  disabled?: boolean;
}

const ToggleSwitch: FC<IToggleSwitch> = ({
  active = true, callback, id, disabled = false,
}) => {
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    if (disabled) {
      setIsActive(false);
    }
  }, [disabled]);

  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setIsActive(checked);
    return callback(checked);
  };

  return (
    <>
      <input
        className={styles.checkbox}
        checked={isActive}
        onChange={handleToggle}
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
