//Layout of the landing page 
import React from 'react'
import Footer from './Footer'
import { Flex } from "@chakra-ui/react";
import Hero from './Hero'

const Layout = (props) => {
    return (
        <>
	 <Flex 
	    direction="column"
	    align="center"
	    maxW={{ xl: "1200px" }}
	    m="0 auto"
	    {...props}>

	 </Flex>

	<Hero />
        {/**Footer */}
        </>
    )
}

export default Layout 
