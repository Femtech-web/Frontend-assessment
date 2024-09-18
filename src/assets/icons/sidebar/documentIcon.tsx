import { Icon } from "@chakra-ui/react";

export const DocumentIcon = ({
  w,
  h,
  stroke,
}: {
  w: string;
  h: string;
  stroke: string;
}) => (
  <Icon w={w} h={h} fill="none">
    <path
      stroke={stroke}
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M16.5 8.25v4.5c0 3-.75 3.75-3.75 3.75h-7.5c-3 0-3.75-.75-3.75-3.75v-7.5c0-3 .75-3.75 3.75-3.75h1.125c1.125 0 1.372.33 1.8.9L9.3 3.9c.285.375.45.6 1.2.6h2.25c3 0 3.75.75 3.75 3.75Z"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M6 1.5h6.75c1.5 0 2.25.75 2.25 2.25v1.035"
    />
  </Icon>
);
