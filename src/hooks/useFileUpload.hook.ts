import { useState, useRef, ChangeEvent } from "react";

export const useFileUpload = () => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [uploadState, setUploadState] = useState<number>(0);
  const [fileName, setFileName] = useState<string>("");
  const [selectedFiles, setSelectedFiles] = useState<null | FileList>(null);

  const formatFileSize = (size: number): string => {
    if (size < 1024) return `${size} bytes`;
    else if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    else return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleUploadClick = () => {
    setUploadState(0);
    fileInput.current?.click();
  };

  const handleFileUpload = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const files = e.target.files;
    setSelectedFiles(files);

    if (files && files.length > 0) {
      const fileSize = formatFileSize(files[0].size);

      setUploadState(80);
      setFileName(`${files[0].name} - ${fileSize}`);
    } else {
      setUploadState(0);
      setFileName('No file selected');
    }
  };

  return {
    uploadState,
    fileName,
    handleUploadClick,
    handleFileUpload,
    setUploadState,
    setFileName,
    selectedFiles,
    setSelectedFiles,
    fileInput,
  };
};
