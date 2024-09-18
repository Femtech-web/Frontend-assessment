import { Icon } from "@chakra-ui/react";

export const SearchIcon = ({
  w = "18",
  h = "18",
  stroke = "#6C7278",
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
      strokeWidth="1.3"
      d="M8.625 15.75a7.125 7.125 0 1 0 0-14.25 7.125 7.125 0 0 0 0 14.25ZM16.5 16.5 15 15"
    />
  </Icon>
);
