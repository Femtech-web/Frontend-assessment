"use client";

import { Button, Flex, Heading } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@/assets/icons/todo-protocol-page";
import { setStateAction } from "@/types";

export const ProtocolUploadHeader = ({
  setUploadType,
}: {
  setUploadType: setStateAction<string>;
}) => (
  <Flex align="center" gap={8}>
    <Button
      rounded="full"
      borderColor="brandBorder.1"
      bgColor="white"
      variant="outline"
      fontWeight={600}
      px={3}
      py={5}
      leftIcon={<ArrowLeftIcon h="5" w="5" />}
      onClick={() => setUploadType("")}
    >
      Ga terug
    </Button>
    <Heading fontSize="3xl" fontWeight={700} color="grayscale.400">
      New Document
    </Heading>
  </Flex>
);
