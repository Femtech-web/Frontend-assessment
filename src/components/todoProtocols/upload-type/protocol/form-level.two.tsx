import { Flex } from "@chakra-ui/react";
import { FunctionSelector } from "@/components/shared";
import { useProtocolUploadContext } from "@/context/protocol-upload.context";

export function FormLevelTwo() {
  const { levelTwoForm, setLevelTwoForm, handleSelect } =
    useProtocolUploadContext();

  const drafterFunctionOptions = [
    "Cardiologist",
    "Anesthesiologist",
    "Radiologist",
    "Nurse",
  ];
  const drafterColleagueOptions = [
    "John Doe",
    "Jane Smith",
    "Alex Johnson",
    "Emily Davis",
  ];

  return (
    <Flex gap={4}>
      <FunctionSelector
        heading="Drafter"
        desc="This is the person who will write the documents"
        sectionAOptions={drafterFunctionOptions}
        sectionBOptions={drafterColleagueOptions}
        setFormData={setLevelTwoForm}
        formData={levelTwoForm}
        handleSelect={handleSelect}
        name="drafter"
      />
      <FunctionSelector
        heading="Assessor"
        desc="Who should review the documents, fill in the order of precedence. The last one is the final judge"
        noOfLines={2}
        sectionAOptions={drafterFunctionOptions}
        sectionBOptions={drafterColleagueOptions}
        isSmall
        setFormData={setLevelTwoForm}
        formData={levelTwoForm}
        handleSelect={handleSelect}
        name="assessor"
      />
    </Flex>
  );
}
