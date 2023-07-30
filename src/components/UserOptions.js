import * as React from 'react';
import { styled} from '@mui/material/styles';

import { Badge , MenuItem , Menu , Switch} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
const GreenDot = styled('span')({
  width: '15px',
  height: '15px',
  backgroundColor: 'green',
  borderRadius: '50%',
  display: 'inline-block',
  position: 'absolute',
  top: -5,
  right: 10,
});

export default function UserOptions() {
  const [showMenu, setShowMenu] = React.useState(false);
  
  const handleClick = (event) => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <IconButton onClick={handleClick}
              size="large"
              edge="end"
              color="inherit"
            >

      <Badge  badgeContent="NEW" color="error">
      <div>
        <Badge badgeContent={<GreenDot/>}  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}>
        <AccountCircle style={{ color: "purple" , fontSize:"40px" }}/>
        </Badge>
      </div>
      </Badge>
            </IconButton>
      <Menu
      sx={{marginTop:6}}
        open={showMenu}
        onClose={handleClick}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >

<MenuItem >Dark mode <Switch   /></MenuItem>
        <MenuItem >Profile</MenuItem>
        <MenuItem >What's new</MenuItem>
        <MenuItem >Help</MenuItem>
        <MenuItem >Send feedback</MenuItem>
        <MenuItem >Hints and shortcuts</MenuItem>
        <MenuItem >Log out</MenuItem>
      </Menu>
    </div>
  );
}
