import { useState, useRef, ChangeEvent, DragEvent } from "react";
import { formatFileSize } from "@/utils/file.util";
import { trimFileName } from "@/utils/string.util";
import { setStateAction } from "@/types";

export const useFileUpload = (setSelectedFiles: setStateAction<FileList | null>) => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [uploadState, setUploadState] = useState<number>(0);
  const [fileName, setFileName] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);


  const uploadFile = (files: FileList) => {
    setSelectedFiles(files);
    const fileSize = formatFileSize(files[0].size);

    setUploadState(80);
    const trimmedName = trimFileName(files[0].name);
    setFileName(`${trimmedName}/${fileSize}`);
  }

  // ----- manual upload functions ------
  const handleUploadClick = () => {
    setUploadState(0);
    fileInput.current?.click();
  };

  const handleFileUpload = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      uploadFile(files);
    } else {
      setUploadState(0);
      setFileName('No file selected');
    }
  };

  // ----- Drag and drop functions ------
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      uploadFile(files);
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
    handleDragOver,
    handleDragLeave,
    handleDrop,
    setUploadState,
    setFileName,
    fileInput,
  };
};
