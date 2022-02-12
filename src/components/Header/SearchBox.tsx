import{Flex,Input,Icon}from'@chakra-ui/react'
import{RiSearchLine} from "react-icons/ri"
import {useState,useRef} from "react"


export function SearchBox(){
    //const [search,setSearch] = useState('')
    
    const searchInputRef = useRef<HTMLInputElement>(null)

    //console.log(searchInputRef.current.value) //currente é o valor no momento atual (declarativa)
    // console.log(searchInputRef.current.focus()) (imperativo)


    return(
        <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxWidth={400}
            alignSelf="center"
            color="gray.200"
            position="relative"
            bg="gray.800"
            borderRadius="full"
            >
                <Input
                    color="gray50"
                    variant="unstyled"
                    px="4"
                    mr="4"
                    placeholder="buscar na plataforma"
                    _placeholder={{color:'gray.400'}} 
                    ref = {searchInputRef}
                />        

                <Icon as ={RiSearchLine} fontSize= "20"/>

            
            </Flex>
    );
}