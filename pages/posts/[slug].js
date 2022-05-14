import React,{useEffect,useState} from 'react'
import {useRouter} from "next/router"
import { Box,Container } from '@mui/material'
import BlogPost from '../../component/BlogPost'
import Layout from '../../component/Layout'


 const Slug = ({myBlogs}) => {
 
    const [blogs, setBlogs] = useState([])

    console.log(myBlogs,"blogs data shown")
  
    return (
       <Layout title="ttle" description="Individual Blog Page">
            <Container>
        <BlogPost  blogs={myBlogs}/>
    </Container>
       </Layout>
    )
  }
  

  export default Slug

  

  export async function getServerSideProps(context) {
 const {slug}=context.query;
 console.log(slug,"slug kya hai")
   const data= await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
   const myBlogs= await data.json();
   return {
     props: {myBlogs}, // will be passed to the page component as props
   }
 }
