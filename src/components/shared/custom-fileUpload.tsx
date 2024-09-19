import { ChangeEvent, MutableRefObject } from "react";
import {
  FormControl,
  FormLabel,
  VStack,
  Flex,
  HStack,
  Button,
  Text,
  Input,
  Progress,
  IconButton,
} from "@chakra-ui/react";
import {
  DownloadIcon,
  UploadCancelIcon,
} from "@/assets/icons/todo-protocol-page";
import { IFormControl, setStateAction } from "@/types";
import { useFileUpload } from "@/hooks";

interface IDefaultState {
  fileInput: MutableRefObject<HTMLInputElement | null>;
  handleUploadClick: () => void;
  handleFileUpload: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface IUploadState {
  fileName: string;
  setSelectedFiles: setStateAction<null | FileList>;
  uploadState: number;
}

function DefaultState({
  handleUploadClick,
  fileInput,
  handleFileUpload,
}: IDefaultState) {
  return (
    <Flex align="center" flexDir="column" gap={1}>
      <DownloadIcon h="5" w="5" />
      <HStack spacing={1}>
        <Text color="grayscale.300" fontWeight={500}>
          Drag & Drop your files or
        </Text>
        <Button
          variant="link"
          color="grayscale.300"
          fontWeight={700}
          onClick={handleUploadClick}
        >
          Browse
        </Button>
        <Input
          type="file"
          multiple
          hidden
          ref={fileInput}
          onChange={handleFileUpload}
        />
      </HStack>
    </Flex>
  );
}

function UploadState({
  fileName,
  setSelectedFiles,
  uploadState,
}: IUploadState) {
  return (
    <VStack align="stretch" spacing={3} w="100%">
      <Flex justify="space-between">
        <Flex align="center" gap={3}>
          <Text fontWeight={500}>{fileName.split("-")[0]}</Text>
          <Text fontWeight={400}>{fileName.split("-")[1]}</Text>
        </Flex>
        <IconButton
          icon={<UploadCancelIcon h="5" w="5" />}
          aria-label="upload icon"
          size="sm"
          bg="transparent"
          onClick={() => setSelectedFiles(null)}
        />
      </Flex>
      <Flex justify="space-between">
        <Flex w="80%" align="center">
          <Progress
            value={uploadState}
            colorScheme="grayscale"
            bg="progressBg"
            w="100%"
            h="12px"
            rounded="primary"
            sx={{
              "& > div:first-of-type": {
                transition: "width 1s ease",
                borderRadius: "10px",
              },
            }}
          />
        </Flex>
        <Text
          color="grayscale.500"
          fontWeight={600}
          fontSize="xl"
        >{`${uploadState}%`}</Text>
      </Flex>
    </VStack>
  );
}

export function CustomFileUpload({ label, isRequired }: IFormControl) {
  const {
    uploadState,
    handleUploadClick,
    handleFileUpload,
    fileName,
    fileInput,
    selectedFiles,
    setSelectedFiles,
  } = useFileUpload();

  const fileIsLoaded = selectedFiles && selectedFiles?.length > 0;

  return (
    <FormControl isRequired={isRequired}>
      <FormLabel fontWeight={500} mb={3}>
        {label}
      </FormLabel>
      <VStack
        bg="brandGray"
        rounded="primary"
        minH="92px"
        w="100%"
        justify="center"
        p={3}
      >
        {!fileIsLoaded ? (
          <DefaultState
            fileInput={fileInput}
            handleFileUpload={handleFileUpload}
            handleUploadClick={handleUploadClick}
          />
        ) : (
          <UploadState
            fileName={fileName}
            uploadState={uploadState}
            setSelectedFiles={setSelectedFiles}
          />
        )}
      </VStack>
    </FormControl>
  );
}
