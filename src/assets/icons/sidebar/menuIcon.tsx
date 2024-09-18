import { Icon } from "@chakra-ui/react";

export const MenuIcon = ({
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
      d="M16.448 5.07 13.92 15.217a1.67 1.67 0 0 1-1.635 1.283H2.43c-1.132 0-1.942-1.11-1.605-2.197l3.158-10.14A1.688 1.688 0 0 1 5.588 2.97h9.225c.712 0 1.305.435 1.552 1.035.143.322.173.69.083 1.065Z"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M12 16.5h3.585c.967 0 1.725-.818 1.657-1.785L16.5 4.5M7.26 4.785l.78-3.24M12.285 4.793l.705-3.255M5.775 9h6M5.025 12h6"
    />
  </Icon>
);
