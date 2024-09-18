import { Icon } from "@chakra-ui/react";

export const ArrowDownIcon = ({
  w = "18",
  h = "18",
  fill = "#6C7278",
}: {
  w?: string;
  h?: string;
  fill?: string;
}) => (
  <Icon w={w} h={h} fill="none">
    <path
      fill={fill}
      d="M8.453.772H1.547c-.56 0-.84.676-.444 1.073l3.022 3.022a1.243 1.243 0 0 0 1.756 0l1.149-1.15 1.872-1.872A.631.631 0 0 0 8.453.772Z"
    />
  </Icon>
);
