import React, { createContext } from "react";

const NavContext = createContext();

function NavProvider(props) {
  const isOpen = "false";

  return (
    <NavContext.Provider value={isOpen}>
      {props.children}
    </NavContext.Provider>
  );
};

export { NavContext, NavProvider };
