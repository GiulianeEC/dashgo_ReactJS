import {Flex,Box,Text,Avatar} from '@chakra-ui/react'

interface ProfileProps{
    showProfileData?:boolean;
}

export function Profile({showProfileData = true} : ProfileProps){
    return(
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Giuliane Correa</Text>
                    <Text color="gray.300" fontSize="small" > 
                        g.eulaliacorrea@gmail.com 
                    </Text>
                </Box>
            )}
            <Avatar size="md" name= "Giuliane Correa" src= "https://github.com/giulianeec.png"/>
        </Flex>
    );
}