import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Imposter = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: calc(100% - 2rem);
  max-height: calc(100% - 2rem);
  z-index: 101;
`;

const Modal = ({ showModal }) => {
  return (
    <>
      {showModal ? (
        <Container>
          <p>Modal</p>
          <Imposter>
            <p>Content</p>
          </Imposter>
        </Container>
      ) : null}
    </>
  );
};

export default Modal;
