import React from 'react'
import { Box,Typography } from '@mui/material'

function BlogPost({slug,blogs}) {
  return (
    <Box>
        <Typography component="h3" variant='h3' textAlign="center">{blogs&&blogs.title}</Typography>
        <Typography component="p" variant='body1' textAlign="center">
{blogs&&blogs.content}
</Typography>
    </Box>
  )
}

export default BlogPost