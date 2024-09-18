import { Icon } from "@chakra-ui/react";

export const AddSquareIcon = ({
  w = "20",
  h = "20",
  stroke = "#fff",
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
      strokeWidth="1.2"
      d="M6.667 11h6.666M10 14.333V7.667M7.5 19.333h5c4.167 0 5.833-1.666 5.833-5.833v-5c0-4.167-1.666-5.833-5.833-5.833h-5c-4.167 0-5.833 1.666-5.833 5.833v5c0 4.167 1.666 5.833 5.833 5.833Z"
    />
  </Icon>
);
