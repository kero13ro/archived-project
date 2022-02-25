import React from "react";
import { useState } from "react";

export const ModalContext = React.createContext();

const ModalProvider = (props) => {
  const [isShow, setModalShow] = useState(false);

  return (
    <ModalContext.Provider value={{ isShow, setModalShow }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
