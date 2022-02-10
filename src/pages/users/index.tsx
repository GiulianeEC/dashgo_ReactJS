import {Box,Flex,Heading,Icon,Button,Thead,Th,Tr,Td,Table,Checkbox,Text,Tbody,useBreakpointValue} from '@chakra-ui/react'
import {RiAddLine,RiPencilLine} from 'react-icons/ri'

import Link from 'next/link'

import {Header} from '../../components/Header'
import{SideBar} from '../../components/SideBar'
import {Pagination} from '../../components/Pagination'

export default function UserList(){
    const isWideVersion = useBreakpointValue({
        base:false,
        lg:true,
    });
    return(
        <Box>
            <Header/>

            <Flex w="100%" my="6" maxWidth={1480} mx ="auto" px="6">
                <SideBar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">

                    <Flex mb="8" justify="space-between" aling="center">
                        <Heading size="lg" fontWeight="normal">Usuarios</Heading>

                        <Link href="/users/create" passHref>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="16"/> } >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4","4","6" ]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuarios</Th>
                                {isWideVersion && <Th>Data de cadastro</Th>}
                                <Th width="8"></Th>
                            </Tr>    
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4","4","6" ]} >
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Giuliane</Text>
                                        <Text fontSize="sim" color="gray.300">g.eulaliacorrea@gmail.com</Text>
                                    </Box>
                                </Td>    
                                    {isWideVersion && <Td>24/04/201</Td>}
                                    {/* <Td>
                                        <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as ={RiPencilLine}/>}>
                                            {isWideVersion ? 'Editar' : ''}
                                        </Button>
                                    </Td> */}
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination/>

                </Box>
            </Flex>
        </Box>
    );
}