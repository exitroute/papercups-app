import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
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

export default function Card(props) {
  const handleChange = (e) => {
    props.openModal(e.target.value);
  };

  return (
    <>
      <StyledBox>
        <Stack>
          <Frame>
            <img src={`${props.url}`} alt="Picture of a paper cup" />
          </Frame>
          <Cluster>
            <Box>
              <p>{`${props.name}`}</p>
              <button value="false" onClick={handleChange}>
                Find out more
              </button>
            </Box>
          </Cluster>
        </Stack>
      </StyledBox>
    </>
  );
}
