"use client";

import { Button } from "@chakra-ui/react";

export const CustomBtn = ({
  text,
  bgColor,
}: {
  text: string;
  bgColor: string;
}) => (
  <Button
    rounded="primary"
    fontSize="md"
    fontWeight={700}
    color="white"
    bg={bgColor}
  >
    {text}
  </Button>
);
