import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Container} from '@mui/material';
import { useRouter } from 'next/dist/client/router';

const pages = [
  {
    lable:"Home",
    path:"/",
  },
  {
    lable:"About",
    path:"/about",
  },
  {
    lable:"Blog",
    path:"/blog",
  },
];
 function Navbar() {

  // router hooks
  const router=useRouter();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SOBlog
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,index) => (
              <Button
                key={index}
               onClick={()=>router.push(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.lable}
              </Button>
            ))}
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}


export default Navbar