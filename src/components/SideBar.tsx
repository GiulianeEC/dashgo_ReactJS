import { Box,Stack,Text,Link,Icon} from '@chakra-ui/react'
import { RiDashboardLine,RiContactsLine,RiInputMethodLine,RiGitMergeLine} from 'react-icons/ri';

export function SideBar(){

    return(
        <Box as= "aside" w="64" mr="8">
            <Stack spacing="12" aling="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">
                        GERAL
                    </Text>
                    <Stack spacing="4" mt="8" aling="stretch">
                        <Link display="flex" aling="center">
                            <Icon as= {RiDashboardLine} fontSize="20"/>
                            <Text ml="4" fontWeight="medium"> Dashboard </Text>
                        </Link>

                        <Link display="flex" aling="center">
                            <Icon as= {RiContactsLine} fontSize="20"/>
                            <Text ml="4" fontWeight="medium"> Usuarios </Text>
                        </Link>

                    </Stack>
                </Box>

                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">
                        AUTOMAÇÃO
                    </Text>
                    <Stack spacing="4" mt="8" aling="stretch">
                        <Link display="flex" aling="center">
                            <Icon as= {RiInputMethodLine} fontSize="20"/>
                            <Text ml="4" fontWeight="medium"> Formularios </Text>
                        </Link>

                        <Link display="flex" aling="center">
                            <Icon as= {RiGitMergeLine} fontSize="20"/>
                            <Text ml="4" fontWeight="medium"> Automação </Text>
                        </Link>

                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}