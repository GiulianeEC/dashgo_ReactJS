import {Flex,Button,Stack} from '@chakra-ui/react'
import { Input } from '../components/Form/Input';

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
    <Flex
      as="from"
      width="100%"
      maxWidth={360}
      bg="gray.800"
      p="8" //rem
      borderRadius={8} //px
      flexDir="column"
      >

      <Stack spacing="4">
      <Input name ="email" type="email" label ="E-mail"/>
      <Input name ="password" type="password" label ="Senha"/>
      </Stack> 

      <Button type="submit" mt="6" colorScheme= "pink" size="lg" >Entrar</Button>
    </Flex>
      
  </Flex>
  )
}
