import { Icon } from "@chakra-ui/react";

export const ArrowLeftIcon = ({
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
      strokeWidth="1.5"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM15.5 12h-6"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m11.5 9-3 3 3 3"
    />
  </Icon>
);
