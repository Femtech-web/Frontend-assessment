import { Icon } from "@chakra-ui/react";

export const NoteIcon = ({
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
      d="M6 1.5v2.25M12 1.5v2.25M5.25 9.75h6M5.25 12.75H9M12 2.625c2.498.135 3.75 1.087 3.75 4.612v4.636c0 3.09-.75 4.635-4.5 4.635h-4.5c-3.75 0-4.5-1.545-4.5-4.635V7.238c0-3.526 1.252-4.47 3.75-4.613h6Z"
    />
  </Icon>
);
