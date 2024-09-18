"use client";

import React, { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Flex, ButtonGroup, Button, useDisclosure } from "@chakra-ui/react";
import { UploadIcon, AddIcon } from "@/assets/icons/todo-protocol-page";
import { InstantUploadModal } from "./instant-upload.modal";
import { navBtns } from "../data";

const PageHeader = ({
  setUploadType,
}: {
  setUploadType: Dispatch<SetStateAction<string>>;
}) => {
  const [currentTab, setCurrentTab] = useState("Dashboard");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isCurrentTab = (tabName: string) => tabName === currentTab;

  return (
    <Fragment>
      <Flex alignItems="center" justifyContent="space-between" mb={6} gap={4}>
        <Flex
          alignItems="center"
          border="1px"
          borderColor="brandBorder.1"
          p="3px"
          rounded="primary"
          bgColor="white"
          minH="46px"
          minW="60%"
        >
          <ButtonGroup variant="ghost" spacing="6">
            {navBtns.map((btn, index) => (
              <Button
                leftIcon={isCurrentTab(btn.name) ? btn.activeIcon : btn.icon}
                bgColor={isCurrentTab(btn.name) ? "brandPurple" : "transparent"}
                color={isCurrentTab(btn.name) ? "white" : "grayscale.400"}
                rounded="8px"
                key={index}
                onClick={() => setCurrentTab(btn.name)}
                _hover={{
                  bgColor: isCurrentTab(btn.name) ? "brandPurple" : "brandGray",
                  opacity: isCurrentTab(btn.name) ? 0.9 : 1,
                }}
              >
                {btn.name}
              </Button>
            ))}
          </ButtonGroup>
        </Flex>
        <Flex alignItems="center">
          <ButtonGroup spacing="4">
            <Button
              rounded="primary"
              borderColor="brandGreen.400"
              bgColor="brandGreen.100"
              colorScheme="teal"
              variant="outline"
              color="brandGreen.400"
              leftIcon={<UploadIcon w="5" h="5" />}
              onClick={onOpen}
            >
              Instant Upload
            </Button>
            <Button
              variant="fill"
              bgColor="brandGreen.400"
              rounded="primary"
              color="white"
              leftIcon={<AddIcon w="6" h="6" />}
            >
              New
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
      <InstantUploadModal
        isOpen={isOpen}
        onClose={onClose}
        setUploadType={setUploadType}
      />
    </Fragment>
  );
};

export default PageHeader;
