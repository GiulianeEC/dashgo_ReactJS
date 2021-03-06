import { RiDashboardLine,RiContactsLine,RiInputMethodLine,RiGitMergeLine} from 'react-icons/ri';

import { Stack } from '@chakra-ui/react';
import { NavSection } from './NavSection';
import { NavLink } from './NavLink';

export function SidebarNav(){
    return(
        <Stack spacing="12" aling="flex-start">

            <NavSection title = "GERAL">
                <NavLink icon={RiDashboardLine} href= "/dashboard">Dashboard</NavLink>  
                <NavLink icon={RiContactsLine} href = "/users">Usuarios</NavLink>             
            </NavSection>

            <NavSection title="AUTOMAÇÃO">
                <NavLink icon={RiInputMethodLine} href = "/forms">Formularios</NavLink>
                <NavLink icon={RiGitMergeLine} href = "/automation">Automação</NavLink>
            </NavSection>
            
        </Stack>
    );
}