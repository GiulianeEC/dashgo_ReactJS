import {Flex} from '@chakra-ui/react'

import { SearchBox } from './SearchBox';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { Logo } from './Logo';

export function Header(){
    return(

        <Flex
          as
          ="header"
          w="100%"
          maxWidth={1480}
          h="20"
          mx="auto"
          mt="4"
          px="6"
          align="center"
         >
        
            <Logo/>

            <SearchBox/>

            <Flex
                aling="center"
                ml="auto"
             >
                <NotificationsNav/>
                <Profile/>
            </Flex>
    
        </Flex>

    );
}