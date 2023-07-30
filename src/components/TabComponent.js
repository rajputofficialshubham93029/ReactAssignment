import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function TabComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'  }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}  TabIndicatorProps={{style: {background:'orange'}}} sx={{paddingLeft:1}}>
          <Tab label="All"  />
          <Tab label="Board"  />
          <Tab label="Graph" />
          <Tab label="Recent" />
          <Tab label={<MoreVertIcon/>}/>
        </Tabs>
      </Box>
    </Box>
  );
}
