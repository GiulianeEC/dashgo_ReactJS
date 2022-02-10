import {HStack,Icon} from '@chakra-ui/react'

import {RiNotificationLine,RiUserADDline} from 'react-icons/ri'

export function NotificationsNav(){
    return(
        <HStack  
            spacing= "4"  
            mx="8"
            pr="8"
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"
            > 
                <Icon as={RiNotificationLine} fontSize= "20"/>
                <Icon as={RiUserADDline} fontSize= "20"/>
        </HStack>              
            
            
    );
}