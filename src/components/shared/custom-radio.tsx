"use client";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Box,
  Stack,
} from "@chakra-ui/react";
import { IRadio } from "@/types";

export function CustomRadio({
  label,
  isRequired,
  value,
  setValue,
  extraBtn,
  extraElement,
}: IRadio) {
  const options = ["Yes", "No"];

  return (
    <FormControl flexDir="column" gap={2} isRequired={isRequired}>
      <FormLabel fontWeight={500} mb={3}>
        {label}
      </FormLabel>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="row" spacing={3}>
          {options.map((option, index) => (
            <Box
              key={index}
              as="button"
              bg="brandGray"
              rounded="primary"
              w="8rem"
              textAlign="start"
              py={2}
              px={4}
              onClick={() => setValue(option)}
              borderWidth="1px"
              borderColor={value === option ? "brandGreen.500" : "transparent"}
            >
              <Radio
                key={index}
                value={option}
                fontWeight={500}
                colorScheme="brandGreen"
              >
                {option}
              </Radio>
            </Box>
          ))}
          {extraBtn && extraBtn}
        </Stack>
      </RadioGroup>
      <Box mt={6}>{extraElement && extraElement}</Box>
    </FormControl>
  );
}
