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
   *  cancel
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

  const clearState = () => {
    setStep(1);
    setUserDetails({ name: "" });
    setPaymentDetails({ ccNumber: "" });
  };

  const submit = (data) => {
    //  send data to server
  };

  /*
   * use switch to return components
   *  case 1 user details
   *  case 2 payment details
   *  case 3 review and submit
   *  case 4 purchase success
   *
   */

  switch (step) {
    case 1:
      return (
        <UserDetails
          nextStep={nextStep}
          lastStep={lastStep}
          openModal={props.openModal}
          clearState={clearState}
          getUserDetails={(e) => getUserDetails(e)}
        />
      );
    case 2:
      return (
        <PaymentDetails
          nextStep={nextStep}
          lastStep={lastStep}
          openModal={props.openModal}
          clearState={clearState}
          getPaymentDetails={(e) => getPaymentDetails(e)}
        />
      );
    case 3:
      return (
        <ReviewPurchase
          nextStep={nextStep}
          lastStep={lastStep}
          openModal={props.openModal}
          clearState={clearState}
          paymentDetails={paymentDetails}
          userDetails={userDetails}
          itemData={props.itemData}
        />
      );
    case 4:
      return (
        <PurchaseSuccess clearState={clearState} openModal={props.openModal} />
      );
  }
}
