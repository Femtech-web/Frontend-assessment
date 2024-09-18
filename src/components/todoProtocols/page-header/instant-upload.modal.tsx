"use client";

import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { UploadIcon } from "@/assets/icons/todo-protocol-page";
import React, { Dispatch, SetStateAction } from "react";

interface InstantUpload {
  isOpen: boolean;
  onClose: () => void;
  setUploadType: Dispatch<SetStateAction<string>>;
}

export const InstantUploadModal: React.FC<InstantUpload> = ({
  isOpen,
  onClose,
  setUploadType,
}) => {
  const uploadTypes = [
    "Protocol",
    "Policy",
    "Work Instruction",
    "Regulation",
    "Checklist",
    "Preparation list",
  ];

  const handleUpload = (type: string) => {
    setUploadType(type);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent rounded="20px" minW="40%" pb={6}>
        <ModalHeader fontSize="2xl" color="grayscale.400" fontWeight={700}>
          Instant Upload
        </ModalHeader>
        <ModalCloseButton
          rounded="full"
          bg="brandGray"
          colorScheme="gray"
          boxSize="36px"
        />
        <ModalBody display="flex">
          <Wrap spacing={4}>
            {uploadTypes.map((type, index) => (
              <WrapItem key={index}>
                <Button
                  rounded="primary"
                  borderColor="brandGreen.400"
                  bgColor="brandGreen.100"
                  colorScheme="teal"
                  variant="outline"
                  fontWeight={600}
                  color="brandGreen.400"
                  leftIcon={<UploadIcon w="5" h="5" />}
                  onClick={() => handleUpload(type)}
                >
                  {type}
                </Button>
              </WrapItem>
            ))}
          </Wrap>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
