"use client";

import React, { ReactNode } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./sidebar";
import Navbar from "./navbar/index";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex>
      <Sidebar />
      <Flex
        sx={{
          position: "fixed",
          flexDirection: "column",
          top: "0",
          left: "18vw",
          minHeight: "100vh",
          width: "82vw",
        }}
      >
        <Navbar />
        <Box as="main" px={8} py={6} overflowY="auto" h="90vh">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
