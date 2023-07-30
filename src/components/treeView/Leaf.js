import React from 'react'
import TreeItem from '@mui/lab/TreeItem/TreeItem'

function Leaf({childData , externalId , handleCreateNode}) {
  return (
    <TreeItem nodeId={externalId} label={childData} sx={{padding:"10px 0px"}} onClick={()=>{handleCreateNode(externalId , "editor")}}></TreeItem>
  )
}
export default Leaf