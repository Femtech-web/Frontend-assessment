"use client";

import { Flex, VStack, Heading, Text, Image } from "@chakra-ui/react";
import doctorImage from "@/assets/images/doctor-sitting.png";

export const DescBox = () => (
  <Flex
    bgGradient="linear(to-br, #75C5C1, #4C6BB1, #41245F)"
    rounded="primary"
    minH="122px"
    justifyContent="space-between"
    w="60%"
    px={6}
    py={4}
    color="white"
  >
    <VStack w="70%" align="start" justify="center" spacing={3}>
      <Heading fontSize="2xl">Hi, Paul Helder</Heading>
      <Text noOfLines={4} fontSize="sm" color="grayscale.50">
        You have the following task assigned to you, 16 Closed, 30 Open, 20 To
        Judge, 60 To Be Assigned, 160 Revision
      </Text>
    </VStack>
    <Image src={doctorImage.src} alt="a doctor sitting" objectFit="contain" />
  </Flex>
);
