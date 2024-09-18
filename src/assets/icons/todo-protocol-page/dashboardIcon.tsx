import { Icon } from "@chakra-ui/react";

export const DashboardIcon = ({
  w = "22",
  h = "22",
  stroke = "#1A1C1E",
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
      d="m8.268 2.603-4.94 3.85c-.826.642-1.495 2.008-1.495 3.044v6.792c0 2.127 1.733 3.868 3.86 3.868h10.614a3.871 3.871 0 0 0 3.86-3.859V9.625c0-1.11-.743-2.53-1.65-3.162l-5.665-3.97c-1.284-.898-3.346-.852-4.584.11ZM11 16.49v-2.75"
    />
  </Icon>
);
