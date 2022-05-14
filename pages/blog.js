import React,{useEffect,useState} from 'react'
import Layout from '../component/Layout'
import Link from "next/link";
import { Box, Typography ,Grid} from '@mui/material';


function Blog() {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
  fetch("http://localhost:3000/api/blogs").then((a)=>{
    return a.json();})
 .then((data)=>{
    console.log(data,"fecth api Blog Data")
    setBlogs(data);
  })

  
  }, [])
  
  return (
    <Layout title="SOBlog | Blog " description="this iss Blog pages"> 
    
    <Box paddingBottom={3}>
      <Typography component="h4" variant="h4">Blog</Typography>
          </Box>
       
    <Grid container spacing={3}>
    {blogs.map((blogList,index)=>(
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