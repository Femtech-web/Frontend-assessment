"use client";

import { useState } from "react";
import { Box } from "@chakra-ui/react";
import DashboardLayout from "@/components/layout/dashboard.layout";
import { PageHeader, PageBody } from "@/components/todoProtocols";
import { ProtocolUploadPage } from "@/components/todoProtocols/upload-type";
import { setStateAction } from "@/types";

function renderUploadPage(type: string, setUploadType: setStateAction<string>) {
  switch (type) {
    case "Protocol":
      return <ProtocolUploadPage setUploadType={setUploadType} />;
    default:
      return <PageBody />;
  }
}

export default function Todos() {
  const [uploadType, setUploadType] = useState("");

  return (
    <DashboardLayout>
      <Box as="main">
        <PageHeader setUploadType={setUploadType} />
        {renderUploadPage(uploadType, setUploadType)}
      </Box>
    </DashboardLayout>
  );
}
