import React from "react";
import { Box, Stack, Center, Frame, Cluster } from "./EveryLayout";

export default function PictureDetails(props) {
  const handleChange = (e) => {
    props.openModal(e.target.value);
  };

  const handlePurchase = (e) => {
    props.startPurchase(e.target.value);
  };

  return (
    <Box>
      <Center>
        <Stack>
          <p>{props.itemData.name}</p>
          <p>{props.itemData.price}</p>
          <Frame>
            <img src={`${props.itemData.url}`} alt="Picture of a paper cup" />
          </Frame>
          <Cluster>
            <Box>
              <button value="false" onClick={handleChange}>
                Close
              </button>
              <button value="false" onClick={handlePurchase}>
                Buy
              </button>
            </Box>
          </Cluster>
        </Stack>
      </Center>
    </Box>
  );
}
