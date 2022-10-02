import React, { createContext, useState } from "react";

const NavContext = createContext();

function NavProvider(props) {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    if(!isOpen) return;
      setIsOpen(false);
    }

  function toggleMenu() {
    setIsOpen((cur) => !cur);
  }

  const values = {
    isOpen,
    closeMenu,
    toggleMenu
  }

  return (
    <NavContext.Provider value={values}>
      {props.children}
    </NavContext.Provider>
  );
};

export { NavContext, NavProvider };
