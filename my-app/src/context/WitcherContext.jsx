import { createContext, useState, useContext } from 'react';

const WitcherContext = createContext();

export const WitcherProvider = ({ children }) => {
    const [witcherId, setGlobalWitcherId] = useState(null);

    return (
        <WitcherContext.Provider value={{ witcherId, setGlobalWitcherId }}>
            {children}
        </WitcherContext.Provider>
    );
};

export const useWitcher = () => useContext(WitcherContext);