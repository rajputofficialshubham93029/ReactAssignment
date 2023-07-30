import React from 'react'
import Leaf from './Leaf'
import TreeView from '@mui/lab/TreeView/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem/TreeItem';
import TreeViewHeading from './TreeViewHeading';
function Node({childData , externalId , handleCreateNode}) {
  return (
        childData.map((child , index)=>{
                if(child.type==="leaf")
                {
                    return <Leaf childData={child.Name} externalId={externalId+" "+index} handleCreateNode={handleCreateNode}/>
                }
                else
                {
                    return (

                    <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />} sx={{  flexGrow: 1  , marginTop:3 }}>
                        <TreeItem nodeId={externalId+" "+index} label={<TreeViewHeading nodeId={externalId+" "+index} heading={child.Name} handleCreateNode={handleCreateNode} />} >
                            <Node childData={child.children} externalId={externalId+" "+index} handleCreateNode={handleCreateNode}/>   
                        </TreeItem>
                    </TreeView>
                          )
              }
        })
     )
}

export default Node