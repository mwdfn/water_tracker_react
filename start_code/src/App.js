import { useState } from 'react';
import { useToggleMode } from './hooks/useToggleMode';

import MainPage from './pages/MainPage';

function App() {

  // const [isDarkMode, setIsDarkMode] = useState(false);

  const {isToggleMode, toggleMode} = useToggleMode()

  return (
    <div className={isToggleMode ? "dark" : "light"}>
      <button onClick={toggleMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
