"use client";

import {
  Image,
  HStack,
  IconButton,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react";
import { NotificationIcon, ArrowDownIcon } from "@/assets/icons/navbar";
import userImg from "@/assets/images/userImage.jpg";

export const ProfileSection = () => (
  <HStack spacing={2}>
    <IconButton
      isRound={true}
      bgColor="brandGray"
      boxSize="46px"
      aria-label="notification"
      icon={<NotificationIcon />}
    />
    <Flex as="button" sx={addStyles.profileBtn} _hover={{ opacity: 0.7 }}>
      <HStack>
        <Image
          borderRadius="full"
          boxSize="40px"
          objectFit="cover"
          my={3}
          src={userImg.src}
          alt="user image"
        />
        <Text fontSize="sm" fontWeight={600} color="grayscale.400">
          HI Paul
        </Text>
      </HStack>
      <Center transform="auto" translateY="6px">
        <ArrowDownIcon />
      </Center>
    </Flex>
  </HStack>
);

const addStyles = {
  profileBtn: {
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 9999,
    backgroundColor: "brandGray",
    gap: "1rem",
    paddingRight: "0.05rem",
    width: "fit-content",
    height: "42px",
  },
};
