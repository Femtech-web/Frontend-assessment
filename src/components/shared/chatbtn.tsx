"use client";

import React from "react";
import { IconButton, Box } from "@chakra-ui/react";
import { ChatIcon } from "@/assets/icons";

export const ChatBtn = () => {
  return (
    <Box position="fixed" right={4} bottom={8}>
      <IconButton
        isRound={true}
        variant="solid"
        bg="brandGreen.100"
        aria-label="Chat"
        icon={<ChatIcon h="5" w="5" />}
      />
    </Box>
  );
};
