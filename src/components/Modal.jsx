import React, { useState } from "react";
import "./Modal.css";
const Modal = ({ children, showModal, changeVisibility }) => {
  return (
    <div className={showModal ? "Modal" : "Modal hide"}>
      <div onClick={changeVisibility} className="close">
        X
      </div>
      <div className="principal">{children}</div>
    </div>
  );
};

export default Modal;
