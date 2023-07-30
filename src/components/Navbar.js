import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {AppBar , Toolbar , Box , Badge ,  Button} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import UserOptions from './UserOptions';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
          <AppBar position="static"  color='transparent'>
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                  >
                        <MenuIcon />
                  </IconButton>
                  <Search>
                        <SearchIconWrapper>
                              <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                          placeholder="dfin"
                          inputProps={{ 'aria-label': 'search' }}
                        /> 
                  </Search> 
                  <Box sx={{ flexGrow: 1 }} />
                           <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                  <Button sx={{color:'inherit'}}><PersonAddIcon/>INVITE TEAM MEMBER</Button>
                          </IconButton>
                          <IconButton
                            size="large"
                            color="inherit"
                          >
                              <Badge  color="error">
                                    <NotificationsNoneIcon />
                              </Badge>
                          </IconButton>
                          <UserOptions/>
                     </Box>
                </Toolbar>
          </AppBar>
      </Box>
  );
}
