import { Box, Stack, Center } from "./EveryLayout";

import Nav from "./Nav";

const Layout = (props) => (
  <>
    <Nav />
    <Box>
      <Center>
        <Stack>{props.children}</Stack>
      </Center>
    </Box>
  </>
);

export default Layout;
