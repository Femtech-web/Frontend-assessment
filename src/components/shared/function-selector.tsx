"use client";
import { Flex, Button, VStack, Box, Text, Heading } from "@chakra-ui/react";
import { CustomSelect } from "./custom-select";
import { IFunctionSelector, IGroupListing } from "@/types";
import { useSelection } from "@/hooks";
import { AddSquareIcon } from "@/assets/icons/todo-protocol-page";
import { baseStyles } from ".";

export function SelectionGroupListing({
  groups,
  sectionAOptions,
  sectionBOptions,
  removeGroup,
  sectionAPlaceholder,
  sectionBPlaceholder,
  fieldALabel,
  fieldBLabel,
  handleSelection,
}: IGroupListing) {
  return (
    <VStack spacing={4} align="stretch">
      {groups.map((group) => (
        <Flex gap={3} key={group.id} alignItems="flex-end">
          <CustomSelect
            isRequired
            options={sectionAOptions}
            label={fieldALabel}
            placeholder={sectionAPlaceholder}
            name=""
            value={group[fieldALabel.toLowerCase()]}
            onChange={(value) =>
              handleSelection(value, group.id, fieldALabel.toLowerCase())
            }
          />
          <CustomSelect
            isRequired
            options={sectionBOptions}
            label={fieldBLabel}
            placeholder={sectionBPlaceholder}
            value={group[fieldBLabel.toLowerCase()]}
            name=""
            onChange={(value) =>
              handleSelection(value, group.id, fieldBLabel.toLowerCase())
            }
          />
          {groups.length > 1 && (
            <Button
              borderColor="brandRed"
              borderWidth="1px"
              bg="lightRed"
              color="brandRed"
              rounded="primary"
              _hover={{ bg: "lightRed", opacity: 0.8 }}
              onClick={() => removeGroup(group.id)}
            >
              -
            </Button>
          )}
        </Flex>
      ))}
    </VStack>
  );
}

export function AddBtn({
  isSmall,
  handleClick,
}: {
  isSmall: boolean;
  handleClick: () => void;
}) {
  return (
    <Button
      variant="fill"
      bgColor="brandGreen.400"
      rounded="primary"
      color="white"
      fontSize="sm"
      fontWeight={400}
      py={2}
      px={isSmall ? 5 : 2}
      leftIcon={<AddSquareIcon w="6" h="6" />}
      _hover={{ opacity: 0.8 }}
      onClick={handleClick}
    >
      Add
    </Button>
  );
}

export function FunctionSelector({
  heading,
  desc,
  sectionAOptions,
  sectionBOptions,
  noOfLines,
  isSmall,
  setFormData,
  formData,
  name,
  handleSelect,
}: IFunctionSelector) {
  const { groups, addGroup, removeGroup, handleChange } = useSelection(
    "function",
    "colleague"
  );

  const handleSelection = (value: string, id: string, fieldName: string) => {
    const updatedGroups = handleChange(id, fieldName, value);
    handleSelect(updatedGroups, name, setFormData, formData);
  };

  return (
    <Box sx={baseStyles.box} w="50%" minH="14rem" h="fit-content">
      <Flex flexDir="column" gap={8}>
        <Flex justify="space-between" gap={2}>
          <VStack spacing={3} align="start">
            <Heading fontSize="lg" fontWeight={700} color="grayscale.400">
              {heading}
            </Heading>
            <Text color="lightBlue" noOfLines={noOfLines || 1}>
              {desc}
            </Text>
          </VStack>
          <AddBtn isSmall={isSmall || false} handleClick={addGroup} />
        </Flex>
        <SelectionGroupListing
          groups={groups}
          sectionAOptions={sectionAOptions}
          sectionBOptions={sectionBOptions}
          sectionAPlaceholder="Select Function"
          sectionBPlaceholder="Select Colleague"
          fieldALabel="Function"
          fieldBLabel="Colleague"
          removeGroup={removeGroup}
          handleSelection={handleSelection}
        />
      </Flex>
    </Box>
  );
}
