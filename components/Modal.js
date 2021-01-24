import React from "react";
import styled from "styled-components";
import { Box, Stack, Center, Frame } from "./EveryLayout";

const Container = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Imposter = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: calc(100% - 2rem);
  max-height: calc(100% - 2rem);
  z-index: 101;
`;

const Modal = ({ showModal, itemData }) => {
  return (
    <>
      {showModal ? (
        <Container>
          <Imposter>
            <Box>
              <Center>
                <Stack>
                  <p>{itemData.name}</p>
                  <p>{itemData.price}</p>
                  <Frame>
                    <img src={`${itemData.url}`} alt="Picture of a paper cup" />
                  </Frame>
                </Stack>
              </Center>
            </Box>
          </Imposter>
        </Container>
      ) : null}
    </>
  );
};

export default Modal;
