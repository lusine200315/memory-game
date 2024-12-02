import { createPortal } from 'react-dom';
import { formatTime } from '../../../helpers';
import { Button, TadaContainer } from '../../UI';
import closeSvg from '../../../assets/images/icons/close.svg'
import styles from './endGameModal.module.scss';

const EndGameModal = ({ title, message, timerMsg, time, buttonText, onClose, onRestart}) => {

    const handleRestart = () => {
        onRestart();
    };

    return createPortal(
        <div className={styles['modal-overlay']} >
            <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
                <img
                    className={styles['close-icon']}
                    src={closeSvg}
                    alt="close-icon"
                    onClick={onClose}
                />
                <h1 className={styles['modal-title']}>
                    {title}
                </h1>
                {time && <TadaContainer />}
                <p className={styles['modal-message']}>
                    { message }
                </p>
                {time && <p>{ timerMsg }<span className={styles['small-timer']}>{ formatTime(time) }</span></p>}
                <Button
                    text={buttonText}
                    handleClick={handleRestart}
                />
            </div>
        </div>,
        document.body
    );
};

export default EndGameModal;
