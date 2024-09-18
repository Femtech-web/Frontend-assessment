"use client";

import { Heading } from "@chakra-ui/react";
import DashboardLayout from "@/components/layout/dashboard.layout";

export default function Home() {
  return (
    <DashboardLayout>
      <Heading size="md">Home Page</Heading>
    </DashboardLayout>
  );
}
