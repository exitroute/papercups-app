import React, { useState } from "react";
import UserDetails from "./UserDetails";

export default function PurchaseWizard() {
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
    setStep(step++);
  };

  const lastStep = () => {
    setStep(step--);
  };

  const cancel = () => {
    //  close modal and return to cup page
  };

  const handleChange = (e) => {
    //  do something with e
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
      return <UserDetails nextStep={nextStep} lastStep={lastStep} />;
    case 2:
      return <PaymentDetails />;
    case 3:
      return <ReviewPurchase />;
    case 4:
      return <PurchaseSuccess />;
  }
}
