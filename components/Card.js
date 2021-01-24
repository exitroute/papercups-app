import React, { useState } from "react";
import styled from "styled-components";
import { Box, Cluster, Stack, Frame } from "./EveryLayout";

const StyledBox = styled(Box)`
  p,
  button {
    visibility: hidden;
    opacity: 0;
    transition: 500ms;
  }
  &:hover p,
  &:hover button {
    visibility: visible;
    opacity: 1;
  }
  img {
    border: var(--border-thick-light);
  }
  &:hover img {
    border: var(--border-thick);
    transition: 500ms;
  }
`;

export default function Card(item) {
  return (
    <StyledBox>
      <Stack>
        <Frame>
          <img src={`${item.url}`} alt="Picture of a paper cup" />
        </Frame>
        <Cluster>
          <Box>
            <p>{`${item.name}`}</p>
            <button>Find out more</button>
          </Box>
        </Cluster>
      </Stack>
    </StyledBox>
  );
}
