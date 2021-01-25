import { Box, Stack, Center } from "./EveryLayout";

const Layout = (props) => (
  <Box>
    <Center>
      <Stack>{props.children}</Stack>
    </Center>
  </Box>
);

export default Layout;
