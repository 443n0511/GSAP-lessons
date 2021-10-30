import React, { memo } from "react";
import { Center } from "@chakra-ui/react";
import Loader from "react-loader-spinner";

export const Loading = memo(() => {
  return (
    <Center
      as='header'
      h='100vh'
      bgColor='blue.900'
      w='100vw'
      fontSize='6vw'
      fontWeight='900'>
      <Loader type='Bars' color='#30CFD0' height={100} width={100} />
    </Center>
  );
});
