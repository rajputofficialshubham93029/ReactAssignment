import ReactQuill from 'react-quill';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { getData , setData } from '../../utils/data';
import reference from './helperFunction';
const Editor = ({type , leafData , id , parentId}) => {
    let data = getData();  
    let ref = reference(data , parentId);
    let [load , setLoad] = useState(false);
    const handleTextEdition =  (e)=>{
        ref[id] = ({type:type , data:e} );
         setData(data);
        setLoad(!load);
    }
  return (
          <div style={{marginBottom:"50px" , marginTop:"20px"}}>
                  <ReactQuill theme="snow"  value={ref[id].data} onChange={(e)=>{handleTextEdition(e)}}/>
          </div>
  );
};
export default Editor;
