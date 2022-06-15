import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../../components/Form/Input";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";


const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail é obrigatório").email("Formato do e-mail não é aceito"),
  password: yup.string().required("Senha é obrigatória").min(6, "Mínimo 6 caracteres"),
  password_confirmation: yup.string().oneOf([
    null, yup.ref("password")
  ], "As senhas precisam ser iguais").required("Senha de confirmação é obrigatória"),
})


export default function CreateUser() {

  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const handleCreateUser = values => {
    console.log(values)
  }


  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800" p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    name="name"
                    label="Nome Completo"
                    error={errors.name}
                    {...field}
                  />
                )}
              />
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

            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
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

              <Controller
                name="password_confirmation"
                control={control}
                render={({ field }) => (
                  <Input
                    name="password_confirmation"
                    type="password"
                    label="Confirmação da senha"
                    error={errors.password_confirmation}
                    {...field}
                  />
                )}
              />

            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>

            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}