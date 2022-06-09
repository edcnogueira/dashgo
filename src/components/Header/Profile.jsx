import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile({ showProfileData }) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Edjancarlos Filho</Text>
          <Text color="gray.300" fontSize="small">
            edjan.nogueira14@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Edjancarlos Filho" src="https://avatars.githubusercontent.com/u/65095142?v=4" />
    </Flex>
  )
}