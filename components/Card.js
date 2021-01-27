import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { Box, Stack, Frame } from "./EveryLayout";

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
  img {
    background-color: grey;
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
      <StyledBox space={"--s-2"}>
        <Frame onClick={handleChange}>
          <img src={`${props.url}`} alt="Picture of a paper cup" />
        </Frame>
        <Stack>
          <Box space={"--s-2"}>
            <p>{`${props.name}`}</p>
          </Box>
        </Stack>
      </StyledBox>
    </>
  );
}
