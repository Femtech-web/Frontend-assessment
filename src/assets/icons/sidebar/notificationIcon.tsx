import { Icon } from "@chakra-ui/react";

export const NotificationIcon = ({
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
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M9 4.83v2.498M9.015 1.5A4.993 4.993 0 0 0 4.02 6.495V8.07c0 .51-.21 1.275-.473 1.71l-.952 1.59c-.585.982-.18 2.078.9 2.438a17.505 17.505 0 0 0 11.047 0 1.665 1.665 0 0 0 .9-2.438l-.952-1.59c-.263-.435-.473-1.207-.473-1.71V6.495C14.01 3.75 11.76 1.5 9.015 1.5Z"
    />
    <path
      stroke={stroke}
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M11.497 14.115A2.506 2.506 0 0 1 9 16.613a2.502 2.502 0 0 1-1.763-.736 2.502 2.502 0 0 1-.735-1.762"
    />
  </Icon>
);
