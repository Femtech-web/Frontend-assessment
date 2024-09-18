"use client";

import { Flex } from "@chakra-ui/react";
import { ProtocolUploadHeader } from "./header";
import { ProtocolUploadForm } from "./form";
import { setStateAction } from "@/types";

const ProtocolUploadPage = ({
  setUploadType,
}: {
  setUploadType: setStateAction<string>;
}) => {
  return (
    <Flex mt={8} flexDir="column" gap={8}>
      <ProtocolUploadHeader setUploadType={setUploadType} />
      <ProtocolUploadForm />
    </Flex>
  );
};

export default ProtocolUploadPage;
