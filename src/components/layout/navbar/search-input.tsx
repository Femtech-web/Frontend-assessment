"use client";

import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Center,
} from "@chakra-ui/react";
import { SearchIcon } from "@/assets/icons/navbar";

export const SearchInput = () => (
  <Box>
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Center transform="auto" translateY="3px">
          <SearchIcon />
        </Center>
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search anything here"
        fontSize="sm"
        _placeholder={{
          fontSize: "sm",
        }}
      />
    </InputGroup>
  </Box>
);
