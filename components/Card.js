import React, { useState } from "react";
import styled from "styled-components";
import { Box, Cluster, Stack, Frame } from "./EveryLayout";

const P = styled.p`
  visibility: ${(props) => (props.inHover ? "visible" : "hidden")};
`;

export default function Card(item) {
  const [inHover, setHover] = useState(false);

  return (
    <StyledBox>
      <Stack>
        <Frame>
          <img src={`${item.url}`} alt="Picture of a paper cup" />
        </Frame>
        <Cluster>
          <Box>
            <p>{`${item.name}`}</p>
          </Box>
        </Cluster>
      </Stack>
    </StyledBox>
  );
}
