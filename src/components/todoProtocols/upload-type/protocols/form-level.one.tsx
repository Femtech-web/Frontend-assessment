import { SimpleGrid, Box } from "@chakra-ui/react";
import { CustomSelect, CustomInput, baseStyles } from "@/components/shared";
import {
  classificationOptions,
  departmentOptions,
  subFolderOptions,
} from "../../data";

export function FormLevelOne() {
  return (
    <Box sx={baseStyles.box} w="100%">
      <SimpleGrid columns={3} spacing={5}>
        <CustomSelect
          isRequired
          options={departmentOptions}
          label="Department"
          placeholder="Select Department"
          onChange={() => {}}
          value=""
        />
        <CustomSelect
          isRequired
          options={subFolderOptions}
          label="Sub folder"
          placeholder="Select Sub folder"
          onChange={() => {}}
          value=""
        />
        <CustomInput
          isRequired={false}
          label="Document ID"
          placeholder="Enter Document ID"
          inputMode="numeric"
          type="text"
        />
        <CustomInput
          isRequired
          label="Document Title"
          placeholder="Enter Document Title"
          type="text"
        />
        <CustomSelect
          isRequired
          options={classificationOptions}
          label="Classification"
          placeholder="Select Classification"
          onChange={() => {}}
          value=""
        />
        <CustomInput
          isRequired={false}
          label="Version"
          placeholder="Enter Version"
          type="text"
        />
      </SimpleGrid>
    </Box>
  );
}
