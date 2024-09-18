import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { InputProps } from "@/types";

export function CustomInput({
  label,
  placeholder,
  isRequired,
  type,
  inputMode,
  value,
  name,
}: InputProps) {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input
        placeholder={placeholder}
        variant="docsFilled"
        type={type}
        inputMode={inputMode}
        value={value}
        name={name}
      />
    </FormControl>
  );
}
