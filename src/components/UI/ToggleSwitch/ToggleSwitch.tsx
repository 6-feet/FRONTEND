import React, {FC, useState, ChangeEvent} from 'react';
import styles from './ToggleSwitch.module.scss';

export interface IToggleSwitch {
    active?: boolean;
    callback: (isActive: boolean) => boolean | void;
    id: string;
}

const ToggleSwitch: FC<IToggleSwitch> = ({active = true, callback, id}) => {
    const [isActive, setIsActive] = useState(active);

    const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        setIsActive(checked);
        return callback(checked);
    }

    return (
        <>
            <input
                className={styles.checkbox}
                checked={isActive}
                onChange={handleToggle}
                id={id}
                type="checkbox"
            />
            <label className={styles.label} htmlFor={id}>
                <span className={styles.button} />
            </label>
        </>
    )
};

export default ToggleSwitch;