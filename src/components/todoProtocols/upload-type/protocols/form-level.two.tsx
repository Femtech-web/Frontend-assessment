import { Flex } from "@chakra-ui/react";
import { FunctionSelector } from "@/components/shared";

export function FormLevelTwo() {
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
      />
      <FunctionSelector
        heading="Assessor"
        desc="Who should review the documents, fill in the order of precedence. The last one is the final judge"
        noOfLines={2}
        sectionAOptions={drafterFunctionOptions}
        sectionBOptions={drafterColleagueOptions}
        isSmall
      />
    </Flex>
  );
}
