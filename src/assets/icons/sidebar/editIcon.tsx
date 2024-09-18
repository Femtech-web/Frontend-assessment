import { Icon } from "@chakra-ui/react";

export const EditIcon = ({
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
      d="M8.25 1.5h-1.5C3 1.5 1.5 3 1.5 6.75v4.5C1.5 15 3 16.5 6.75 16.5h4.5c3.75 0 5.25-1.5 5.25-5.25v-1.5"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="m12.03 2.265-5.91 5.91c-.225.225-.45.668-.495.99l-.323 2.258c-.12.817.458 1.387 1.275 1.274l2.258-.322c.315-.045.757-.27.99-.495l5.91-5.91c1.02-1.02 1.5-2.205 0-3.705s-2.685-1.02-3.705 0Z"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M11.183 3.112a5.358 5.358 0 0 0 3.705 3.705"
    />
  </Icon>
);
