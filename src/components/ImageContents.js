import { useRef, useEffect, memo } from "react";
import { gsap } from "gsap";
import { Image, Center, Text, Flex } from "@chakra-ui/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ImageContents = memo(({ index, url }) => {
  const box = useRef(null);
  const message = useRef(null);
  const direction = index % 2 === 0 ? "row-reverse" : "row";
  const childrenText = index % 2 === 0 ? "From right" : "From left";
  useEffect(() => {
    const toRight = [
      { x: -60, autoAlpha: 0 },
      {
        x: 0,
        duration: 1.5,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: box.current,
          start: "bottom bottom",
        },
      },
    ];
    const toLeft = [
      {
        x: 60,
        autoAlpha: 0,
      },
      {
        x: 0,
        duration: 2,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: box.current,
          start: "bottom bottom",
        },
      },
    ];

    index % 2 === 0
      ? gsap.fromTo(box.current, ...toRight)
      : gsap.fromTo(box.current, ...toLeft);

    gsap.fromTo(
      message.current,
      {
        y: 200,
        autoAlpha: 0,
      },
      {
        y: 0,
        delay: 0.5,
        ease: "bounce.out",
        autoAlpha: 1,
        scrollTrigger: {
          trigger: box.current,
          start: "bottom bottom",
        },
      }
    );
  });
  return (
    <>
      <Flex
        bgImage={url}
        backgroundAttachment='fixed'
        w='100%'
        h='100vh'
        color='white'
        backgroundSize='cover'
        backgroundPosition='center'
        position='relative'
        _before={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          content: `""`,
        }}
        alignItems='center'
        justifyContent='center'>
        <Flex
          ref={box}
          w={{ base: "60%", md: "70%" }}
          alignItems='center'
          justifyContent='center'
          flexDirection={{ base: "column", md: direction }}>
          <Image
            as='img'
            objectFit='cover'
            my='auto'
            src={url}
            alt='cute dog'
            w={{ base: "100%", md: "50%" }}
            maxHeight={800}
          />
          <Center w='100%'>
            <Text
              ref={message}
              fontSize={{ base: "3xl", md: "6xl" }}
              fontWeight='900'>
              {`${childrenText}🐶`}
            </Text>
          </Center>
        </Flex>
      </Flex>
    </>
  );
});
