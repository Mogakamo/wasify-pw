import React from 'react'
import { Box } from '@chakra-ui/react'

const MenuToggle = () => {
    return (
	<Box display={{ base: "block", md: "none" }} onClick={toggle}>
	   {isOpen ? <CloseIcon /> : <MenuIcon />}
	</Box>    
    )
}
