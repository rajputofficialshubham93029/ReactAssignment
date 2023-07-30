import * as React from 'react';
import {AppBar, Box, Toolbar , Tooltip} from '@mui/material';
import Node from './Node';
import AddIcon from '@mui/icons-material/Add';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import IconButton from '@mui/material/IconButton';
export default function TreeViewComponent({handleCreateNode , data}) 
{
  return (
        <Box sx={{width:"30%"  }}>
            <Box>
              <AppBar position='relative' color=''>
                <Toolbar sx={{display:'flex'  , justifyContent:'space-between'}}>
                    <Box>DFIN</Box>
                    <Box>
                        <Tooltip title="Add Collection" placement="top">
                                  <IconButton
                                        size="large"
                                        edge="end"
                                        color="inherit"
                                        onClick={()=>{handleCreateNode("top-component" , "node")}}
                                      >
                                          <AddIcon  color='error'/>
                                  </IconButton>
                          </Tooltip>
                                <IconButton
                                  size="large"
                                  edge="end"
                                  color="inherit"
                                >
                                         <UnfoldMoreIcon/>
                                </IconButton>
                                <IconButton
                                  size="large"
                                  edge="end"
                                  color="inherit"
                                >
                                    <KeyboardDoubleArrowLeftIcon/>
                                </IconButton>
                       </Box>
                   </Toolbar>
               </AppBar>
          </Box>
           <Box  sx={{overflowY:"scroll" , height:"100vh" }}>
                  <Box sx={{maxWidth:"90%" , margin:'auto'}}>
                          {
                            data === null?"No Data To Show" : 
                              <Node childData={data} externalId="" handleCreateNode={handleCreateNode}/>    

                          }
                    </Box>
            </Box>

        </Box>

  );
}
