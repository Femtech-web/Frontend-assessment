import { Icon } from "@chakra-ui/react";

export const NewspaperIcon = ({
  w,
  h,
  stroke,
}: {
  w: string;
  h: string;
  stroke: string;
}) => (
  <Icon w={w} h={h} fill="none">
    <g
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      clipPath="url(#a)"
    >
      <path d="M3 16.5h12a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 15 1.5H6A1.5 1.5 0 0 0 4.5 3v12A1.5 1.5 0 0 1 3 16.5Zm0 0A1.5 1.5 0 0 1 1.5 15V8.25c0-.825.675-1.5 1.5-1.5h1.5M13.5 10.5h-6M11.25 13.5H7.5" />
      <path d="M7.5 4.5h6v3h-6v-3Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </Icon>
);
