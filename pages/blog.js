import React,{useEffect,useState} from 'react'
import Layout from '../component/Layout'
import Link from "next/link";
import { Box, Typography ,Grid} from '@mui/material';


function Blog({AllBlogs}) {

  const [blogs, setBlogs] = useState([])


  console.log(AllBlogs,"check All List Bloigs")
  return (
    <Layout title="SOBlog | Blog " description="this iss Blog pages"> 
    
    <Box paddingBottom={3}>
      <Typography component="h4" variant="h4">Blog</Typography>
          </Box>
       
    <Grid container spacing={3}>
    {AllBlogs.map((blogList,index)=>(
        <Grid item xs={4} key={blogList.slug} >
           
        <Box  sx={{borderRadius:"10px",background:"#8fafce",height:"200px",padding:2.4,}}>
        <Link href={`/posts/${blogList.slug}`}  >
          <a style={{textDecoration:"none"}}>
        <Typography component="h5" variant="h5">{blogList.title}</Typography>
        <Typography component="p" variant="body1">{blogList.content}</Typography>
        <Typography component="p" variant="body2" sx={{fontWeight:600}}>Author: {blogList.author}</Typography>
        </a>
        </Link>
      </Box>
  
        </Grid>

    ))}
          </Grid>

    
    </Layout>
  )
}

export default Blog



export async function getServerSideProps(context) {
  console.log(context,"ye context hai")

 const data= await fetch("http://localhost:3000/api/blogs");
 const AllBlogs= await data.json();
  return {
    props: {AllBlogs}, // will be passed to the page component as props
  }
}