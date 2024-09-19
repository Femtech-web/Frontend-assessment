"use client";

import React from "react";
import { Flex, Button, HStack } from "@chakra-ui/react";
import { FormLevelOne } from "./form-level.one";
import { FormLevelTwo } from "./form-level.two";
import { FormLevelThree } from "./form-level.three";
import { useProtocolUploadContext } from "@/context/protocol-upload.context";

export const ProtocolUploadForm = () => {
  const { logData } = useProtocolUploadContext();

  return (
    <Flex
      rounded="primary"
      w="100%"
      minH="70vh"
      bg="white"
      p={5}
      mb={5}
      pb={10}
      flexDir="column"
      gap={6}
    >
      <FormLevelOne />
      <FormLevelTwo />
      <FormLevelThree />
      <HStack justify="flex-end">
        <Button
          rounded="primary"
          fontWeight={600}
          color="white"
          bg="brandPurple"
          w="250px"
          _hover={{
            bgColor: "brandPurple",
            opacity: 0.9,
          }}
          onClick={logData}
        >
          Submit
        </Button>
      </HStack>
    </Flex>
  );
};
