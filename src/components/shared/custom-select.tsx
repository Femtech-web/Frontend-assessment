"use client";

import { useState } from "react";
import { SelectProps } from "@/types";
import {
  FormControl,
  FormLabel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { DropdownIcon } from "@/assets/icons/todo-protocol-page";

export function CustomSelect({
  options,
  label,
  placeholder,
  isRequired,
  value,
  name,
  onChange,
}: SelectProps) {
  const [selectedOption, setSelectedOption] = useState(value);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onChange(option, name);
  };

  return (
    <FormControl isRequired={isRequired}>
      <FormLabel fontWeight={500} mb={3}>
        {label}
      </FormLabel>
      <Menu matchWidth>
        <MenuButton
          as={Button}
          background="brandGray"
          borderRadius="10px"
          borderWidth="1px"
          borderColor="brandBorder.2"
          colorScheme="grayscale"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
          _focus={{
            borderColor: "brandGreen.400",
          }}
          rightIcon={
            <Box transform="auto" translateY={1}>
              <DropdownIcon h="5" w="5" />
            </Box>
          }
        >
          {selectedOption !== "" ? (
            <Text w="fit-content">{selectedOption}</Text>
          ) : (
            <Text color="lightBlue" fontWeight={400} w="fit-content">
              {placeholder}
            </Text>
          )}
        </MenuButton>
        <MenuList maxH="250px" overflowY="auto">
          {options.map((option) => (
            <MenuItem key={option} onClick={() => handleSelect(option)}>
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </FormControl>
  );
}
