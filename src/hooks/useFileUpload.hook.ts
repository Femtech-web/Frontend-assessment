import { useState, useRef } from "react";

export const useFileUpload = () => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [uploadState, setUploadState] = useState<number>(0);
  const [fileName, setFileName] = useState<string>("");

  const handleUploadClick = () => {
    setUploadState(0);
    fileInput.current?.click();
    setFileName("selecting file...");
  };

  return {
    uploadState,
    fileName,
    handleUploadClick,
    setUploadState,
    setFileName,
    fileInput,
  };
};
