import { useState } from "react";
import {
  Flex,
  Stack,
  Box,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import {
  CustomRadio,
  CustomFileUpload,
  baseStyles,
  SelectionGroupListing,
} from "@/components/shared";
import { useSelection } from "@/hooks";
import { setStateAction } from "@/types";
import { AddBtn } from "@/components/shared";
import { departmentOptions, subFolderOptions } from "../../data";

const DateInput = ({
  revisionDate,
  handleChange,
}: {
  revisionDate: string;
  handleChange: setStateAction<string>;
}) => (
  <FormControl>
    <FormLabel>Enter Date</FormLabel>
    <Input
      placeholder="Select Date and Time"
      type="datetime-local"
      value={revisionDate}
      onChange={(e) => handleChange(e.target.value)}
    />
  </FormControl>
);

export function FormLevelThree() {
  const { groups, handleChange, removeGroup, addGroup } = useSelection();

  const [shouldCopyToGroup, setShouldCopyToGroup] = useState("");
  const [shouldBeRuleOfLife, setShouldBeRuleOfLife] = useState("");
  const [shouldAdjustDate, setShouldAdjustDate] = useState("");
  const [shouldBeABronchure, setShouldBeABronchure] = useState("");

  const [revisionDate, setRevisionDate] = useState("");

  const canCopyToGroup = shouldCopyToGroup === "Yes";
  const canAdjustDate = shouldAdjustDate === "Yes";

  return (
    <Box sx={baseStyles.box} w="100%">
      <Stack spacing={8}>
        <Flex gap={canCopyToGroup ? 6 : 0}>
          <Flex flexDir="column" gap={8} flex={canCopyToGroup ? 1.3 : 1}>
            <CustomRadio
              label="Do you want to copy this item to the new group?"
              value={shouldCopyToGroup}
              setValue={setShouldCopyToGroup}
              extraBtn={
                canCopyToGroup && <AddBtn isSmall handleClick={addGroup} />
              }
              extraElement={
                canCopyToGroup && (
                  <SelectionGroupListing
                    groups={groups}
                    sectionAOptions={departmentOptions}
                    sectionBOptions={subFolderOptions}
                    sectionAPlaceholder="Select Department"
                    sectionBPlaceholder="Select SubFolder"
                    fieldALabel="Department"
                    fieldBLabel="SubFolder"
                    handleChange={handleChange}
                    removeGroup={removeGroup}
                  />
                )
              }
              isRequired
            />
            <CustomRadio
              label="Should this become a rule of life?"
              isRequired
              value={shouldBeRuleOfLife}
              setValue={setShouldBeRuleOfLife}
            />
          </Flex>
          <Flex flexDir="column" gap={8} flex={1}>
            <CustomRadio
              label="Adjusted revision date? (Standard 3 years)"
              isRequired
              value={shouldAdjustDate}
              setValue={setShouldAdjustDate}
              extraElement={
                canAdjustDate && (
                  <DateInput
                    revisionDate={revisionDate}
                    handleChange={setRevisionDate}
                  />
                )
              }
            />
            <CustomRadio
              label="Should this item become a brochure?"
              isRequired
              value={shouldBeABronchure}
              setValue={setShouldBeABronchure}
            />
          </Flex>
        </Flex>
        <CustomFileUpload isRequired label="Upload Document" />
      </Stack>
    </Box>
  );
}
