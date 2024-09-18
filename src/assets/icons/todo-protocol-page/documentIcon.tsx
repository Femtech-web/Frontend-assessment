import { Icon } from "@chakra-ui/react";

export const DocumentIcon = ({
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
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M19.25 6.417v9.166c0 2.75-1.375 4.584-4.583 4.584H7.333c-3.208 0-4.583-1.834-4.583-4.584V6.417c0-2.75 1.375-4.584 4.583-4.584h7.334c3.208 0 4.583 1.834 4.583 4.584Z"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M13.292 4.125v1.833c0 1.009.825 1.834 1.833 1.834h1.833M7.333 11.917H11M7.333 15.583h7.334"
    />
  </Icon>
);
