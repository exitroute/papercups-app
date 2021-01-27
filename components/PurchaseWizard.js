import React, { useState } from "react";

import UserDetails from "./steps/UserDetails";
import PaymentDetails from "./steps/PaymentDetails";
import ReviewPurchase from "./steps/ReviewPurchase";
import PurchaseSuccess from "./steps/PurchaseSuccess";

export default function PurchaseWizard(props) {
  /*
   * Hooks for:
   *  [x] setStep
   *  [x] setUserDetails
   *  [x] setPaymentDetail
   *  [x] setConfirmPurchase
   *  setPurchaseSuccess from server
   */

  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState({ name: "" });
  const [paymentDetails, setPaymentDetails] = useState({ ccNumber: "" });
  const [isPurchaseConfirmed, setIsPurchaseConfirmed] = useState(false);

  /*
   * Functions for:
   *  [x] next
   *  [x] back
   *  [x] cancel
   *  handleChange
   *  submit
   */

  const nextStep = () => {
    setStep(step + 1);
  };

  const lastStep = () => {
    setStep(step - 1);
  };

  const getUserDetails = (e) => {
    setUserDetails({ name: e });
  };

  const getPaymentDetails = (e) => {
    setPaymentDetails({ ccNumber: e });
  };

  const resetPurchaseWizard = () => {
    setStep(1);
    setUserDetails({ name: "" });
    setPaymentDetails({ ccNumber: "" });
    props.startPurchase();
  };

  const submit = (data) => {
    //  send data to server
  };

  switch (step) {
    case 1:
      return (
        <UserDetails
          nextStep={nextStep}
          lastStep={lastStep}
          openModal={props.openModal}
          resetPurchaseWizard={resetPurchaseWizard}
          getUserDetails={(e) => getUserDetails(e)}
        />
      );
    case 2:
      return (
        <PaymentDetails
          nextStep={nextStep}
          lastStep={lastStep}
          openModal={props.openModal}
          resetPurchaseWizard={resetPurchaseWizard}
          getPaymentDetails={(e) => getPaymentDetails(e)}
        />
      );
    case 3:
      return (
        <ReviewPurchase
          nextStep={nextStep}
          lastStep={lastStep}
          openModal={props.openModal}
          resetPurchaseWizard={resetPurchaseWizard}
          paymentDetails={paymentDetails}
          userDetails={userDetails}
          itemData={props.itemData}
        />
      );
    case 4:
      return (
        <PurchaseSuccess
          resetPurchaseWizard={resetPurchaseWizard}
          openModal={props.openModal}
        />
      );
  }
}
