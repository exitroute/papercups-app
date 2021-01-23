import React, { useState } from "react";
import styled from "styled-components";
import { Box } from "./EveryLayout";

const P = styled.p`
  visibility: ${(props) => (props.inHover ? "visible" : "hidden")};
`;

export default function Card(item) {
  const [inHover, setHover] = useState(false);

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={`${item.url}`} alt="Picture of a paper cup" />
      <P inHover={inHover}>{`${item.name}`}</P>
    </Box>
  );
}
