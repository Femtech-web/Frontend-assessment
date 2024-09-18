import { Icon } from "@chakra-ui/react";

export const HomeIcon = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M3.75 7.5h1.5c1.5 0 2.25-.75 2.25-2.25v-1.5c0-1.5-.75-2.25-2.25-2.25h-1.5c-1.5 0-2.25.75-2.25 2.25v1.5c0 1.5.75 2.25 2.25 2.25ZM12.75 7.5h1.5c1.5 0 2.25-.75 2.25-2.25v-1.5c0-1.5-.75-2.25-2.25-2.25h-1.5c-1.5 0-2.25.75-2.25 2.25v1.5c0 1.5.75 2.25 2.25 2.25ZM12.75 16.5h1.5c1.5 0 2.25-.75 2.25-2.25v-1.5c0-1.5-.75-2.25-2.25-2.25h-1.5c-1.5 0-2.25.75-2.25 2.25v1.5c0 1.5.75 2.25 2.25 2.25ZM3.75 16.5h1.5c1.5 0 2.25-.75 2.25-2.25v-1.5c0-1.5-.75-2.25-2.25-2.25h-1.5c-1.5 0-2.25.75-2.25 2.25v1.5c0 1.5.75 2.25 2.25 2.25Z"
    />
  </Icon>
);
