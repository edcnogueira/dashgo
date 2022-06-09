import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";


export function NavLink({ icon, children, href, ...rest }) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </Link>
  )
}