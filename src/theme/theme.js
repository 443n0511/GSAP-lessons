import { extendTheme } from "@chakra-ui/react";
export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "white",
        color: "gray.900",
      },
    },
  },
  fonts: {
    heading: "Heading Font Name",
    body: "Body Font Name",
  },
});
