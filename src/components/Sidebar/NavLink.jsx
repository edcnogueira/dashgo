import { Icon, Link, Text } from "@chakra-ui/react";

export function NavLink({ icon, children, ...rest }) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}