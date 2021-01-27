import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Layout from "./Layout";
import styled from "styled-components";
import PictureDetails from "./PictureDetails";
import PurchaseWizard from "./PurchaseWizard";

const GlobalStyle = createGlobalStyle`
  body {
    height: ${(props) => (props.showModal ? "100%" : "100vh")};
    overflow-y: ${(props) => (props.modalIsOpen ? initial : "hidden")};
  }
`;

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
  overflow: auto;
  max-width: calc(100% - 2rem);
  max-height: calc(100% - 2rem);
  z-index: 101;
`;

const Modal = (props) => {
  const [showPurchaseWizard, setShowPurchaseWizard] = useState(false);

  const startPurchase = () => {
    setShowPurchaseWizard((prev) => !prev);
  };

  let modalContent;

  if (showPurchaseWizard === false) {
    modalContent = (
      <PictureDetails
        openModal={props.openModal}
        itemData={props.itemData}
        startPurchase={(e) => {
          startPurchase(e);
        }}
      />
    );
  } else {
    modalContent = (
      <PurchaseWizard
        itemData={props.itemData}
        openModal={props.openModal}
        startPurchase={startPurchase}
      />
    );
  }

  return (
    <>
      {props.showModal ? (
        <>
          <GlobalStyle showModal={props.showModal} />
          <Container>
            <Imposter>
              <Layout>{modalContent}</Layout>
            </Imposter>
          </Container>
        </>
      ) : null}
    </>
  );
};

export default Modal;
