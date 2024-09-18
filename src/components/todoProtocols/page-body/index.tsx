"use client";

import { Flex } from "@chakra-ui/react";
import { DescBox } from "./desc-box";
import { TaskSection } from "./task-section";

const PageBody = () => {
  return (
    <Flex flexDir="column" gap={7} mb={4}>
      <DescBox />
      <TaskSection />
    </Flex>
  );
};

export default PageBody;
