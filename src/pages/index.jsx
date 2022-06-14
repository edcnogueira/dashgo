import { Button, Flex, Stack } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, useForm } from "react-hook-form"
import * as yup from "yup"
import { Input } from "../components/Form/Input"

export default function SignIn() {

  const signInFormSchema = yup.object().shape({
    email: yup.string().required("E-mail é obrigatório").email("Formato do e-mail não é aceito"),
    password: yup.string().required("Senha é obrigatória"),
  })

  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState



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
            render={({ field }) => (
              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...field}
              />

            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...field}
              />
            )}
          />

        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}

