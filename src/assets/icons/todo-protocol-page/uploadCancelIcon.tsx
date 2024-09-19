import { Icon } from "@chakra-ui/react";

export const UploadCancelIcon = ({
  w = "24",
  h = "24",
  stroke = "#fff",
  fill = "#7988A9",
}: {
  w?: string;
  h?: string;
  stroke?: string;
  fill?: string;
}) => (
  <Icon w={w} h={h} fill="none">
    <circle cx="11.93" cy="11.891" r="9.343" fill={fill} />
    <path
      fill={stroke}
      fillRule="evenodd"
      d="M16.18 8.18a.708.708 0 0 1-.046 1L8.82 15.864a.708.708 0 0 1-.955-1.045l7.314-6.685a.708.708 0 0 1 1 .044Z"
      clipRule="evenodd"
    />
    <path
      fill={stroke}
      fillRule="evenodd"
      d="M8.18 7.82a.708.708 0 0 1 1 .045l6.685 7.315a.708.708 0 0 1-1.045.955L8.134 8.82a.708.708 0 0 1 .045-1Z"
      clipRule="evenodd"
    />
  </Icon>
);
