import { useEffect, useState } from 'react';
import { GamePage, MainMenu} from './pages/index';

function App() {
  const [loadGame, setLoadGame] = useState(false);
  const [level, setLevel] = useState();
  
  const openMainMenu = () => {
    setLevel();
    setLoadGame(false);
  };

  useEffect(() => {
    if (level) {
      setLoadGame(true);
    }
  }, [level]);

  return (
    <>
      { loadGame 
        ? <GamePage level={level} openMainMenu={openMainMenu} /> 
        : <MainMenu setLevel={setLevel} />
      }
    </>
  );
};

export default App;
