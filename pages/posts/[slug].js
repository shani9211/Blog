import React,{useEffect,useState} from 'react'
import {useRouter} from "next/router"
import { Box,Container } from '@mui/material'
import BlogPost from '../../component/BlogPost'
import Layout from '../../component/Layout'


 const Slug = () => {
    const router = useRouter()
    const {slug } = router.query;
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        if (!router.isReady) {
         return   
        }
        fetch(`http://localhost:3000/api/getBlog?slug=${slug}`).then((a)=>{
          return a.json();})
       .then((data)=>{
          console.log(data,"fecth api Blog Data")
          setBlogs(data);
        })
      
        
        }, [router.isReady,slug])
    console.log(blogs,"blogs data shown")
  
    return (
       <Layout title={slug} description="Individual Blog Page">
            <Container>
        <BlogPost slug={slug} blogs={blogs}/>
    </Container>
       </Layout>
    )
  }
  

  export default Slug



