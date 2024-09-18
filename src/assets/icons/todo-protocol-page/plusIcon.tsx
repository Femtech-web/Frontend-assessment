import { Icon } from "@chakra-ui/react";

export const PlusIcon = ({
  w = "28",
  h = "28",
  stroke = "#292D32",
}: {
  w?: string;
  h?: string;
  stroke?: string;
}) => (
  <Icon w={w} h={h}>
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M7 14h14M14 21V7"
    />
  </Icon>
);
