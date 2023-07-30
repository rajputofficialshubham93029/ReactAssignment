import React from 'react'
import {Box , Tooltip} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function TreeViewHeading({heading , nodeId , handleCreateNode}) {
  return (
          <Box sx={{display:'flex' , justifyContent:'space-between'}}>
               <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                  {heading}
                </Box>
                <Box>
                      <Tooltip title="Add Sub-Collection" placement="top">
                                <IconButton
                                    size="large"
                                    edge="end"
                                    color="inherit"
                                    onClick = {()=>{handleCreateNode(nodeId , "node")}}
                                  >
                                            <AddIcon />
                                  </IconButton>
                        </Tooltip>
                        <Tooltip title="Add Item" placement="top">
                              <IconButton
                                  size="large"
                                  edge="end"
                                  color="inherit"
                                  onClick = {()=>{handleCreateNode(nodeId , "leaf")}}
                                >
                                        <LibraryAddIcon/>
                                </IconButton>
                        </Tooltip>
                                  <IconButton
                                    size="large"
                                    edge="end"
                                    color="inherit"
                                  >
                                        <MoreVertIcon/>
                                  </IconButton>
                </Box>
          </Box>
  )
}

export default TreeViewHeading