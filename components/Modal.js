import React from "react";
import styled from "styled-components";
import { Box, Stack, Center, Frame, Cluster } from "./EveryLayout";

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

const Modal = (props) => {
  const handleChange = (e) => {
    props.openModal(e.target.value);
  };

  return (
    <>
      {props.showModal ? (
        <Container>
          <Imposter>
            <Box>
              <Center>
                <Stack>
                  <p>{props.itemData.name}</p>
                  <p>{props.itemData.price}</p>
                  <Frame>
                    <img
                      src={`${props.itemData.url}`}
                      alt="Picture of a paper cup"
                    />
                  </Frame>
                  <Cluster>
                    <Box>
                      <button value="false" onClick={handleChange}>
                        Close
                      </button>
                      <button>Buy</button>
                    </Box>
                  </Cluster>
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
