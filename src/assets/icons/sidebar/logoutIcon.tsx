import { Icon } from "@chakra-ui/react";

export const LogoutIcon = ({
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
      d="M6.675 5.67c.233-2.7 1.62-3.803 4.657-3.803h.098c3.353 0 4.695 1.343 4.695 4.695v4.89c0 3.353-1.342 4.696-4.695 4.696h-.098c-3.014 0-4.402-1.088-4.65-3.743M11.25 9H2.715M4.388 6.487 1.875 9l2.513 2.512"
    />
  </Icon>
);
