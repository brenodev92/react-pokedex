import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
    </ChakraProvider>
  );
}
