export const EASY = 'Easy';
export const MEDIUM = 'Medium';
export const HARD = 'Hard';

export const LEVELS_LABELS = [ EASY, MEDIUM, HARD ];

export const LEVELS_CARD_COUNT = {
    [EASY]: 6,   
    [MEDIUM]: 10, 
    [HARD]: 15,   
};

export const LEVELS_TIME = {
    [EASY]: 60,
    [MEDIUM]: 120,
    [HARD]: 180,
};

const LEVELS_INFO = {
    EASY,
    MEDIUM,
    HARD,
    LEVELS_LABELS,
    LEVELS_CARD_COUNT,
    LEVELS_TIME
};

export default LEVELS_INFO;
