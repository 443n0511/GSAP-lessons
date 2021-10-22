import React, { useEffect, memo } from "react";
import { Center, Text, Flex } from "@chakra-ui/react";
import { gsap } from "gsap";

export const Header = memo(() => {
  const p = React.createRef();

  useEffect(() => {
    gsap.to(p.current, {
      backgroundImage: "linear-gradient(to left, #30CFD0, #330867)",
      duration: 3,
      opacity: 1,
    });
  }, [p]);
  return (
    <Flex w='100%' h='100vh' justifyContent='center' alignItems='center'>
      <Center
        ref={p}
        as='header'
        fontSize='6vw'
        backgroundClip='text'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        fontWeight='900'
        opacity='0'>
        <Text as='p' textAlign='center'>
          React ChakraUI GSAP
          <br />
          Dog images are retrieved
          <br /> from Dog API
        </Text>
      </Center>
    </Flex>
  );
});
