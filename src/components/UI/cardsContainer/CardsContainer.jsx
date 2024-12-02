import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Card from '../card';
import { LEVELS_CARD_COUNT } from '../../../constants';
import { initializeCards, isWon, resetCards } from '../../../helpers';
import styles from './cardsContainer.module.scss';

const CardsContainer = ({ level, startTimer, endGameModal }) => {
    const [cards, setCards] = useState([]);
    const [runTimer, setRunTimer] = useState(false); 

    useEffect(() => {
        if(runTimer) {
            startTimer();
        }
    }, [runTimer, startTimer]);

    const handleCardClick = useCallback((index) => {
        if (!runTimer) setRunTimer(true);
        if (cards[index].isOpen || cards[index].isMatched) return;

        const updatedCards = [...cards];
        updatedCards[index].isOpen = true;

        const openCards = updatedCards.filter(card => card.isOpen && !card.isMatched);

        if (openCards.length > 2) return;
        if (openCards.length === 2) {
            const [firstCard, secondCard] = openCards;

            if (firstCard.name === secondCard.name) {
                updatedCards[firstCard.index].isMatched = true;
                updatedCards[secondCard.index].isMatched = true;

                if (isWon(updatedCards)) {
                    endGameModal(true);
                }

            } else {
                setTimeout(() => {
                    setCards(resetCards(updatedCards, firstCard, secondCard));
                }, 500);
            }
        }

        setCards(updatedCards);
    }, [cards, runTimer, endGameModal]);

    useMemo(() => {
        const numCards = LEVELS_CARD_COUNT[level];
        setCards(initializeCards(numCards));
    }, [level]);

    return (
        <div className={`${styles['card-container']} ${styles[`${level.toLowerCase()}-grid`]}`}>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    index={index}
                    isOpen={card.isOpen}
                    name={card.name}
                    isMatched={card.isMatched}
                    onClick={handleCardClick}
                />
            ))}
        </div>
    );
};

export default CardsContainer;
