import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { Box, Cluster, Stack, Frame } from "./EveryLayout";

const StyledBox = styled(Box)`
  p {
    text-align: center;
  }
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
  & > div:first-child {
    border: var(--border-thick-light);
  }
  & > div:first-child:hover {
    border: var(--border-thick);
    transition: 500ms;
  }
`;

export default function Card(props) {
  const handleChange = (e) => {
    props.openModal(e.target.value);
    props.getItemData({
      name: props.name,
      price: props.price,
      url: props.url,
    });
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
              <br />
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
