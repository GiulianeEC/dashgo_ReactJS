
import { Box, Text, Stack, Link, Icon } from '@chakra-ui/react';
import { RiDashboardLine, RiContactsLine } from 'react-icons/ri';

import {ReactNode} from 'react'

interface NavSectionProps{
    title: string;
    children: ReactNode;
}

export function NavSection({children, title}:NavSectionProps){
    return(
        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>

            <Stack spacing="4" mt="8" aling="stretch">
                {children}
            </Stack>
        </Box>
    );
}