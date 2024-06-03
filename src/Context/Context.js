import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [menuStatus, setMenuStatus] = useState(false);
    const expos = {
        showMenu,
        setShowMenu,
        menuStatus,
        setMenuStatus,
    }
    return (
        <Context.Provider value={expos}>
            {children}
        </Context.Provider>
    );
};