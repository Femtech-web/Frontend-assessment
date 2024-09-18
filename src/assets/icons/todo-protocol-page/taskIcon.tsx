import { Icon } from "@chakra-ui/react";

export const TaskIcon = ({
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
      d="M11.34 8.14h4.812M5.848 8.14l.688.688 2.062-2.063M11.34 14.557h4.812M5.848 14.557l.688.687 2.062-2.062"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8.25 20.167h5.5c4.583 0 6.417-1.834 6.417-6.417v-5.5c0-4.583-1.834-6.417-6.417-6.417h-5.5c-4.583 0-6.417 1.834-6.417 6.417v5.5c0 4.583 1.834 6.417 6.417 6.417Z"
    />
  </Icon>
);
