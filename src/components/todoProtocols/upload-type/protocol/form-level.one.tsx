import { SimpleGrid, Box } from "@chakra-ui/react";
import { CustomSelect, CustomInput, baseStyles } from "@/components/shared";
import { useProtocolUploadContext } from "@/context/protocol-upload.context";
import {
  classificationOptions,
  departmentOptions,
  departmentSubfolders,
  subFolderOptions,
} from "../../data";

export function FormLevelOne() {
  const { levelOneForm, handleChange, handleSelect, setLevelOneForm } =
    useProtocolUploadContext();
  return (
    <Box sx={baseStyles.box} w="100%">
      <SimpleGrid columns={3} spacing={5}>
        <CustomSelect
          isRequired
          options={departmentOptions}
          label="Department"
          name="department"
          placeholder="Select Department"
          onChange={(option, name) =>
            handleSelect(option, name, setLevelOneForm, levelOneForm)
          }
          value={levelOneForm.department}
        />
        <CustomSelect
          isRequired
          options={
            departmentSubfolders[levelOneForm.department] || [
              "choose a department first",
            ]
          }
          label="Sub folder"
          name="subFolder"
          placeholder="Select Sub folder"
          onChange={(option, name) =>
            handleSelect(option, name, setLevelOneForm, levelOneForm)
          }
          value={levelOneForm.subFolder}
        />
        <CustomInput
          isRequired={false}
          label="Document ID"
          placeholder="Enter Document ID"
          inputMode="numeric"
          type="text"
          value={levelOneForm.documentId}
          name="documentId"
          handleChange={(e) => handleChange(e, setLevelOneForm)}
        />
        <CustomInput
          isRequired
          label="Document Title"
          placeholder="Enter Document Title"
          type="text"
          value={levelOneForm.documentTitle}
          name="documentTitle"
          handleChange={(e) => handleChange(e, setLevelOneForm)}
        />
        <CustomSelect
          isRequired
          options={classificationOptions}
          label="Classification"
          placeholder="Select Classification"
          onChange={(option, name) =>
            handleSelect(option, name, setLevelOneForm, levelOneForm)
          }
          name="classification"
          value={levelOneForm.classification}
        />
        <CustomInput
          isRequired={false}
          label="Version"
          placeholder="Enter Version"
          type="text"
          value={levelOneForm.version}
          name="version"
          handleChange={(e) => handleChange(e, setLevelOneForm)}
        />
      </SimpleGrid>
    </Box>
  );
}
