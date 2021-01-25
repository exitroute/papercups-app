import React from "react";
import { Box, Stack, Cluster } from "../EveryLayout";

export default function UserDetails(props) {
  const next = (e) => {
    props.nextStep();
  };

  const handleNameInput = (e) => {
    props.getUserDetails(e.target.value);
  };

  const close = (e) => {
    props.openModal(e.target.value);
    props.clearState();
  };

  return (
    <Box>
      <Stack>
        <h1>We need your name and email address</h1>
        <Stack>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            onChange={handleNameInput}
            required
          />
        </Stack>
        <Cluster>
          <Box>
            <button value="false" onClick={close}>
              cancel
            </button>
            <button onClick={next}>next</button>
          </Box>
        </Cluster>
      </Stack>
    </Box>
  );
}
