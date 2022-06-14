import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput } from "@chakra-ui/react";

export function Input({ name, label, error = null, ...rest }) {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                name={name}
                id={name}
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                    bgColor: "gray.900",
                }}
                size="lg"
                {...rest}
            />
            {!!error && (

                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    )
}