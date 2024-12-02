import { FRUITS_NAMES } from "../constants";

export const isWon = (cards) => {
    return cards.every(card => card.isMatched);
};

export const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export const shuffleArray = (arr) => {
    let shuffledArr = [...arr];
    for (let i = shuffledArr.length - 1; i > 0; --i) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
};

export const initializeCards = (numCards) => {
    let fruitsSubset = FRUITS_NAMES.slice(0, numCards);
    let duplicatedFruits = [...fruitsSubset, ...fruitsSubset];
    duplicatedFruits = shuffleArray(duplicatedFruits);

    return duplicatedFruits.map((name, index) => ({
        name,
        isOpen: false,
        isMatched: false,
        isHide: false,
        index,
    }));
};

export const resetCards = (cards, firstCard, secondCard) => {
    const resetCards = [...cards];
    resetCards[firstCard.index].isOpen = false;
    resetCards[secondCard.index].isOpen = false;
    return resetCards;
}

const helpers = {
    isWon,
    formatTime,
    shuffleArray,
    initializeCards,
    resetCards,
};

export default helpers;