import React from 'react'
import Head from 'next/head'
import {Box, Container,} from "@mui/material"
import Navbar from './Navbar';

function Layout(props) {
    // props destructring
    const {title,description,children}=props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta description="og:title" content={description} key="title" />
      </Head>
     <Navbar/>
     <Container sx={{marginTop:4}}>
         {children}
     </Container>
    </div>
 
  )
}

export default Layout