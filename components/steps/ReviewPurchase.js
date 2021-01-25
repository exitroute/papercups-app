import React from "react";
import { Box, Frame, Cluster } from "../EveryLayout";

export default function ReviewPurchase(props) {
  const next = (e) => {
    props.nextStep();
  };

  const back = (e) => {
    props.lastStep();
  };

  return (
    <>
      <h1>Review</h1>
      <p>Your order:</p>
      <p>Name: {props.userDetails.name}</p>
      <p>Credit Card: {props.paymentDetails.ccNumber}</p>
      <p>{props.itemData.name}</p>
      <p>{props.itemData.price}</p>
      <Frame>
        <img src={`${props.itemData.url}`} alt="Picture of a paper cup" />
      </Frame>
      <Cluster>
        <Box>
          <button onClick={back}>back</button>
          <button>cancel</button>
          <button onClick={next}>next</button>
        </Box>
      </Cluster>
    </>
  );
}
