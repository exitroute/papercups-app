import React from "react";
import styled from "styled-components";

const Modal = ({ showModal }) => {
  return <>{showModal ? <div>Modal</div> : null}</>;
};

export default Modal;
