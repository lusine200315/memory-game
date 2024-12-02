import { useCallback, useState } from 'react';
import EndGameModal from '../../components/Modals/endGameModal';
import { Button, Timer, CardsContainer } from '../../components/UI';
import { FAIL_MESSAGE, FAIL_TITLE, SUCCESS_TITLE, SUCCESS_MESSAGE, TIMER_MESSAGE } from '../../constants';
import styles from './gamePage.module.scss';

const GamePage = ({ level, openMainMenu }) => {
    const [isWon, setIsWon] = useState(null);
    const [restartKey, setRestartKey] = useState(0);
    const [timerStarted, setTimerStarted] = useState(false);
    const [endTime, setEndTime] = useState(false);

    const startTimer = useCallback(() => {
      if (isWon == null && !timerStarted) {
        setTimerStarted(true);  
      }
    }, [timerStarted, isWon]);

    const endGameModal = useCallback((isWon) => {
        setTimeout(() => {
            setIsWon(isWon);
            setTimerStarted(!isWon);
        }, 500);
    }, []);

    const setInitalStates = () => {
        setIsWon(null);
        setTimerStarted(false);
    };

    const restartGame = () => {
        setInitalStates();
        setRestartKey(prevKey => prevKey + 1);
    };

    return (
        <div className={styles['game-container']}>
            <Timer 
                key={`timer-${restartKey}`}
                endGameModal={endGameModal}
                level={level}
                isRunning={timerStarted}
                setEndTime={setEndTime}
            />  
            <CardsContainer
                key={`cards-${restartKey}`}
                level={level}
                startTimer={startTimer}
                endGameModal={endGameModal}
            />
            <div className={styles['buttons-container']}>
                <Button
                    text={'Restart'}
                    handleClick={restartGame}
                    />
                <Button
                    text={'Menu'}
                    handleClick={openMainMenu}
                />
            </div>
            { isWon !== null && <EndGameModal
                isWonGame={true}
                time={isWon ? endTime : ''}
                title={isWon ? SUCCESS_TITLE : FAIL_TITLE}
                message={isWon ? SUCCESS_MESSAGE : FAIL_MESSAGE}
                timerMsg={isWon ? TIMER_MESSAGE : ''}
                buttonText={isWon ? 'Restart' : 'Retry'}
                onRestart={restartGame}
                onClose={openMainMenu}
            />}
        </div> 
    );
}

export default GamePage;
