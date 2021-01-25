import React, { useState } from "react";
import styled from "styled-components";
import PictureDetails from "./PictureDetails";
import PurchaseWizard from "./PurchaseWizard";

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

const Modal = (props) => {
  const [showPurchaseWizard, setShowPurchaseWizard] = useState(false);

  const startPurchase = () => {
    setShowPurchaseWizard((prev) => !prev);
    console.log("start puchase wizard");
  };

  /**
   *
   * If showPurchaseWizard is false showModal
   * else if showPurchaseWizard is true showPW
   *
   * */

  return (
    <>
      {props.showModal ? (
        <Container>
          <Imposter>
            {/* refactor in to component : pictureDetails */}
            <PictureDetails
              openModal={props.openModal}
              itemData={props.itemData}
              startPurchase={(e) => {
                startPurchase(e);
              }}
            />
            {/* <PurchaseWizard /> */}
          </Imposter>
        </Container>
      ) : null}
    </>
  );
};

export default Modal;
