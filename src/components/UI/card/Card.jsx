import React, { useMemo } from 'react';
import cover from '../../../assets/images/cover.png';
import styles from './card.module.scss';

const Card = ({ index, name, isOpen, isMatched, onClick }) => {
    const ext = '.png';

    const handleClick = () => {
        if (!isMatched) onClick(index);
    };

    const cardImage = useMemo(() => require(`../../../assets/images/${name}${ext}`), [name]);

    return (
        <div
            className={`${styles['card-container']} ${isMatched ? styles['matched'] : ''}`}
            onClick={handleClick}
        >
            <div className={`${styles['card-inner']} ${isOpen ? styles['flipped'] : ''}`}>
                <div className={styles['card-front']}>
                    <img src={cover} alt="cover-icon" />
                </div>
                <div className={styles['card-back']}>
                    <img src={cardImage} alt={`${name} card`} />
                </div>
            </div>
        </div>
    );
};

export default React.memo(Card);
