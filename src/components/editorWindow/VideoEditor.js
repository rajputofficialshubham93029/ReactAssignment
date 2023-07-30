import { Button} from "@mui/material";
import React from "react";
import { useState } from "react";
import { getData , setData } from "../../utils/data";
import reference from "./helperFunction";
export default function VideoEditor({ type, leafData, id, parentId }) {
        let data = getData();  
        let ref = reference(data , parentId);
        let [load , setLoad] = useState(false);
        const [changeVideo , setChangeVideo] = useState(ref[id].data!=="");
        const handleChange =  (e)=>{
            const file = e.target.files[0];
            const url = URL.createObjectURL(file)
            ref[id] = ({type:type , data:url} );
            setData(data);
            setLoad(!load);
        } 
  return (
        <div style={{ marginTop: 10 }}>
          <video  src={ref[id].data} width="640" height="360" controls></video>
          {
                !changeVideo && 
                      <div style={{ width: "60%", margin: "30px 20%" }}>
                              <input type="file" accept="video/*" onChange={handleChange} name="video"/>
                      </div>
          }
          { 
                changeVideo && 
                      <div style={{width:"60%"  , margin:'30px 20%'}}> 
                             <Button variant='outlined' fullWidth onClick={()=>{setChangeVideo(!changeVideo)}} >
                                  Change Video
                              </Button>
                      </div>
            }
        </div>
  );
}

