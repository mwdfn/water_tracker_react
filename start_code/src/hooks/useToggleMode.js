import { useState } from "react";

export const useToggleMode = () => {
    const [isToggleMode, setIsToggleMode] = useState(false);

    const toggleMode = () => {
        setIsToggleMode(!isToggleMode);
    }

    return {isToggleMode, toggleMode}
    
}




