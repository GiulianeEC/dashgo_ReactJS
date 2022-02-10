import { Box,Stack,Text,Link,Icon} from '@chakra-ui/react'
import { RiDashboardLine,RiContactsLine,RiInputMethodLine,RiGitMergeLine} from 'react-icons/ri';

import { NavSection } from './NavSection';
import { NavLink } from './NavLink';

export function SideBar(){

    return(
        <Box as= "aside" w="64" mr="8">
            <Stack spacing="12" aling="flex-start">

                <NavSection title = "GERAL">
                   <NavLink icon={RiDashboardLine}>Dashboard</NavLink>  
                   <NavLink icon={RiContactsLine}>Usuarios</NavLink>             
                </NavSection>

                <NavSection title="AUTOMAÇÃO">
                    <NavLink icon={RiInputMethodLine}>Formularios</NavLink>
                   <NavLink icon={RiGitMergeLine}>Automação</NavLink>
                </NavSection>
                
            </Stack>
        </Box>
    );
}