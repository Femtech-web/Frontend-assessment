import {
  FormControl,
  FormLabel,
  VStack,
  Flex,
  HStack,
  Button,
  Text,
  Input,
} from "@chakra-ui/react";
import { DownloadIcon } from "@/assets/icons/todo-protocol-page";
import { IFormControl } from "@/types";
import { useFileUpload } from "@/hooks";

export function CustomFileUpload({ label, isRequired }: IFormControl) {
  const {
    uploadState,
    handleUploadClick,
    setUploadState,
    setFileName,
    fileInput,
  } = useFileUpload();

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
      >
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
              onChange={() => {}}
            />
          </HStack>
        </Flex>
      </VStack>
    </FormControl>
  );
}
