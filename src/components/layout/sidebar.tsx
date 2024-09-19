"use client";

import React, { useState, useEffect } from "react";
import { Link } from "@chakra-ui/next-js";
import { usePathname } from "next/navigation";
import {
  Flex,
  Image,
  Text,
  VStack,
  Center,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import logoSrc from "@/assets/images/logo.png";
import { routes } from "./data";

const Sidebar = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    if (pathname) setCurrentPath(pathname);
  }, [pathname]);

  const isCurrentPath = (url: string) => currentPath === url;

  return (
    <Flex sx={addStyles.container}>
      <Flex flexDir="column" gap={8}>
        <Flex justifyContent="flex-end" minH="53px">
          <Image src={logoSrc.src} alt="logo img" />
        </Flex>
        <VStack spacing={1} align="flex-start" pl={4}>
          {routes.map((route, index) => (
            <Link
              href={route.url}
              key={`${route.name}${index}`}
              sx={addStyles.link(isCurrentPath(route.url))}
              bgColor={isCurrentPath(route.url) ? "brandGreen.100" : ""}
            >
              <Flex alignItems="center" gap={2}>
                <Center transform="auto" translateY="1px">
                  {isCurrentPath(route.url) ? route.activeIcon : route.icon}
                </Center>
                <Text
                  fontSize="sm"
                  fontWeight={600}
                  color={isCurrentPath(route.url) ? "brandGreen.400" : ""}
                >
                  {route.name}
                </Text>
              </Flex>
            </Link>
          ))}
        </VStack>
      </Flex>
      <FormControl display="flex" alignItems="center" pl={6} mb={6}>
        <FormLabel mb="0" fontSize="sm" fontWeight={600}>
          Dark mode
        </FormLabel>
        <Switch colorScheme="grayscale" />
      </FormControl>
    </Flex>
  );
};

const addStyles = {
  container: {
    position: "fixed",
    height: "100vh",
    width: "18vw",
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-between",
    rowGap: 8,
    borderInlineEnd: "1px",
    borderColor: "brandBorder.1",
    overflowY: "auto",
  },
  link: (cp: boolean) => ({
    width: "95%",
    pl: "1rem",
    py: "0.75rem",
    borderRadius: "10px",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: cp ? "" : "brandGray",
    },
  }),
};

export default Sidebar;
