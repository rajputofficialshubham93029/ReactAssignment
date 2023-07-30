import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Box} from '@mui/material';
import TabComponent from './components/TabComponent';
import TreeViewComponent from './components/treeView/TreeViewComponent';
import EditorWindow from './components/editorWindow/EditorWindow';
import CreateChildNode from './components/CreateChildNode';
import {getData , setData} from './utils/data';
function App() {
    let data = getData();
    const [createNodeData , setCreateNode] = useState(null);
    const handleCreateNode = (parentId , type)=>{
    setCreateNode({parentId , type});
    }
    const addNode = (createNodeData , nodeName)=>{
    const nodeId = createNodeData.parentId.trim();
    const type = createNodeData.type;
    nodeName = nodeName.trim();
    if(nodeId ==="top-component")
    {
        data = [...data , {Name:nodeName , type:"node" , children:[]}]
        setData(data);
    }
    else{
        let arr = nodeId.split(" ");
        let ref = data;
        for(let i=0;i<arr.length;i++)
        {
           ref =  ref[Number(arr[i])].children;
        }
        if(type === "node")
            ref = ref.push({Name:nodeName , type:"node" , children:[]});
       else
           ref.push({Name:nodeName , type:"leaf" , children:[]});
        setData(data);
  }
  setCreateNode(null);
}
  return (
   <Box>
       <Navbar/>
       <TabComponent />
       <Box display={'flex'}>
               <TreeViewComponent handleCreateNode = {handleCreateNode} data={data}/>
              <Box sx={{width:"70%" , height:"100vh" }}>
                    {createNodeData ===null ? <div></div>:createNodeData.type === "editor"?<EditorWindow id={createNodeData.parentId} data={data}/> :  <CreateChildNode createNodeData={createNodeData} addNode={addNode}/>}
              </Box>
        </Box>
    </Box>
    );
}
export default App;
