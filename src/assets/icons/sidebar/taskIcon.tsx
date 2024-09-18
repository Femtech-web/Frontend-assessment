import { Icon } from "@chakra-ui/react";

export const TaskIcon = ({
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
      strokeWidth="1.5"
      d="M9.278 6.66h3.937M4.785 6.66l.562.562 1.688-1.687M9.278 11.91h3.937M4.785 11.91l.562.563 1.688-1.688"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M6.75 16.5h4.5c3.75 0 5.25-1.5 5.25-5.25v-4.5C16.5 3 15 1.5 11.25 1.5h-4.5C3 1.5 1.5 3 1.5 6.75v4.5C1.5 15 3 16.5 6.75 16.5Z"
    />
  </Icon>
);
