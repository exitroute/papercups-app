import React from "react";
import { Box, Stack, Cluster } from "../EveryLayout";

export default function PaymentDetails(props) {
  const next = (e) => {
    props.nextStep();
  };

  const back = (e) => {
    props.lastStep();
  };

  const handlePaymentChange = (e) => {
    props.getPaymentDetails(e.target.value);
  };

  const close = (e) => {
    props.openModal(e.target.value);
    props.clearState();
  };

  return (
    <Box>
      <Stack>
        <h1>Payment</h1>
        <Stack>
          <label htmlFor="Name">Credit Card Number</label>
          <input
            type="text"
            id="cc"
            placeholder="Enter Credit Card Number"
            onChange={handlePaymentChange}
          />
        </Stack>
        <Cluster>
          <Box>
            <button onClick={back}>back</button>
            <button value="false" onClick={close}>
              cancel
            </button>{" "}
            <button onClick={next}>next</button>
          </Box>
        </Cluster>
      </Stack>
    </Box>
  );
}
