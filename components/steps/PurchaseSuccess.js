import React from "react";

export default function PurchaseSuccess(props) {
  const close = (e) => {
    props.openModal(e.target.value);
    props.resetPurchaseWizard();
  };

  return (
    <div>
      <h1>Success!</h1>
      <button value="false" onClick={close}>
        cancel
      </button>
    </div>
  );
}
