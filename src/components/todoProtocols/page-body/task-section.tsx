"use client";

import { Flex, Heading, Text, IconButton } from "@chakra-ui/react";
import { PlusIcon } from "@/assets/icons/todo-protocol-page";
import { taskData } from "../data";

export const TaskSection = () => (
  <Flex gap={4} flexDir="column">
    <Heading fontSize="2xl" fontWeight={700} color="grayscale.400">
      Task Assigned to me
    </Heading>
    <Flex w="60%" flexDir="column" gap={4}>
      {taskData.map((box, index) => (
        <Flex
          key={index}
          align="center"
          justify="space-between"
          bg="white"
          rounded="20px"
          w="100%"
          minH="80px"
          p={2}
        >
          <Flex
            w="fit-content"
            h="60px"
            bg={box.status === "Closed" ? "lightRed" : "brandGreen.100"}
            px={5}
            py={3}
            gap={4}
            rounded="15px"
            align="center"
            justify="space-between"
          >
            <Text fontSize="lg" fontWeight={600}>
              {box.status}
            </Text>
            <Text fontSize="2xl" color="grayscale.400" fontWeight={800}>
              {box.figure}
            </Text>
          </Flex>
          <IconButton
            bgColor="brandGreen.100"
            boxSize="60px"
            rounded="15px"
            aria-label="add"
            icon={<PlusIcon h="7" w="7" />}
          />
        </Flex>
      ))}
    </Flex>
  </Flex>
);
