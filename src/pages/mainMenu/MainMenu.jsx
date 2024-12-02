import ButtonContainer from '../../components/UI/buttonsContainer/ButtonsContainer';
import styles from './mainMenu.module.scss';

const MainMenu = ({ setLevel }) => {
    const handleSetLevel = (level) => {
        setLevel(level);
    };

    return (
        <div className={styles['main-menu-container']}>
            <p className={styles.title}>Memory Game</p>
            <ButtonContainer setLevel={handleSetLevel}/>
        </div>
    ) 
};

export default MainMenu;