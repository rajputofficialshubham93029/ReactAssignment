import React, { useState } from 'react';
import {Box ,  Container , Tooltip} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import Editor from './Editor';
import { getData , setData } from '../../utils/data';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import VideoEditor from './VideoEditor';
import reference from './helperFunction';
import { getPath } from './helperFunction';

export default function EditorWindow({id})
 {
    let data = getData();  
    const [load , setLoad] = useState(true);
    let ref = reference(data , id);
    const handleAddSection =  ()=>
    { 
        ref.push({type:'editor' , data:"<p></p>" });
        setData(data);
        setLoad(!load);
    }
    const handleAddVideoSection = () =>
    {
        ref.push({type:'video' , data:"" });
        setData(data);
        setLoad(!load);
    }
   return( 
   <Container style={{width:"70%" }} sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'}}>
                  <Box style={{padding:'10px 0px'}}>
                      <span>{getPath(id , data)}</span> 
                      <span style={{marginLeft:'20%'}}>Add item member</span>
                  </Box>
                  <div style={{fontSize:"40px" , fontWeight:'lighter'}}>
                    Editor
                  </div>
                  <Box>
                    {
                        ref.map((section , index)=>{
                            return section.type === "editor" ? <Editor  id={index} type={section.type} leafData={section.data} parentId={id}/> : <VideoEditor  id={index} type={section.type} leafData={section.data} parentId={id}/>
                        })
                    }
                  </Box>
                <Box>
                      <Tooltip title="Add Text Section" placement="top">
                                <IconButton
                                      size="large"
                                      edge="end"
                                      color="error"
                                      onClick={handleAddSection}
                                    >
                                            <AddCircleOutlineIcon />
                                    </IconButton>
                        </Tooltip>
                        
                        <Tooltip title="Add Video Section" placement="top">
                                    <IconButton
                                      size="large"
                                      edge="end"
                                      color="error"
                                      onClick={handleAddVideoSection}
                                    >
                                             <ArrowCircleRightSharpIcon />
                                    </IconButton>
                        </Tooltip>
                        
                </Box>
  </Container>
   )
}


