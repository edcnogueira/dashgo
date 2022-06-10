import { Button, Flex, Stack } from "@chakra-ui/react"
import { Controller, useForm } from "react-hook-form"
import { Input } from "../components/Form/Input"

export default function SignIn() {

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const handleSignIn = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)

  }
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input name="email" type="email" label="E-mail" {...field} />}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => <Input name="password" type="password" label="Senha" {...field} />}
          />

        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}

