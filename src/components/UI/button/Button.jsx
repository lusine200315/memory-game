import React from 'react';
import styles from './button.module.scss';

const Button = ({ text, handleClick, type='square' }) => {
    const onClickHandler = () => {
        handleClick(text);
    };

    return (
        <button
            onClick={onClickHandler}
            className={`${styles.btn} ${styles[text.toLowerCase()]} ${type === 'rounded' ? styles['rounded-btn'] : styles['square-btn']}`}                >
            {text}
        </button>
    );
};

export default React.memo(Button);