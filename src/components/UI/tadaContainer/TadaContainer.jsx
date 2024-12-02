import styles from './tada.module.scss';

const TadaContainer = () => {
    return (
        <div className={styles['tada-container']}>
            <span className={styles["tada-emoji"]}>🎉</span>
            <span className={styles["tada-emoji"]}>🎉</span>
            <span className={styles["tada-emoji"]}>🎉</span>
            <span className={styles["tada-emoji"]}>🎉</span>
        </div>
    )
};

export default TadaContainer;