import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea as ChakraTextArea,
} from "@chakra-ui/react";

const TextInput = ({ id, label, helperText, ...rest }) => {
  return (
    <FormControl id={id}>
      <FormLabel>{label}</FormLabel>
      <Input {...rest} />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

const Textarea = ({ id, label, helperText, ...rest }) => {
  return (
    <FormControl id={id}>
      <FormLabel>{label}</FormLabel>
      <ChakraTextArea {...rest} />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export { TextInput, Textarea };
