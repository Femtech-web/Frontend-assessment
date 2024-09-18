import { Icon } from "@chakra-ui/react";

export const DropdownIcon = ({
  w = "24",
  h = "24",
  stroke = "#464B50",
}: {
  w?: string;
  h?: string;
  stroke?: string;
}) => (
  <Icon w={w} h={h} fill="none">
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="m14.94 6.713-4.89 4.89a1.49 1.49 0 0 1-2.1 0l-4.89-4.89"
    />
  </Icon>
);
