import React from "react";
import Button from "../button";
import { LEVELS_LABELS } from "../../../constants";
import styles from './buttonsContainer.module.scss';

const ButtonsContainer = ({ setLevel }) => {
    return (
        <div className={styles['btns-container']}>
        {
            LEVELS_LABELS.map((label, index) => {
                return ( 
                    <Button
                        text={label}
                        key={index}
                        handleClick={setLevel}
                    /> 
                )
            })
        }
        </div>
    );
};

export default React.memo(ButtonsContainer);