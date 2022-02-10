import { createContext, ReactNode,useContext,useEffect } from 'react';
import {useDisclosure,UseDisclosureReturn} from '@chakra-ui/react'
import {useRouter} from "next/router";

interface SidebarDrawerContextProps{
    children:ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerContextProvider({children}:SidebarDrawerContextProps){
    const disclosure = useDisclosure();
    const router = useRouter();

    useEffect(()=> {
        disclosure.onClose()
    }, [router.asPath])

    return(
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)