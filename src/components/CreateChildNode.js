import React from 'react';
import { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
const styles = {
  container: {
    width: '70%',
    padding: 4,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  heading: {
    textAlign: 'center',
  },
  textField: {
    width: '60%',
    marginLeft: '20%',
  },
  buttonContainer: {
    width: '60%',
    margin: '30px 20%',
  },
};

function CreateChildNode({ createNodeData, addNode }) {
  const [nodeName, setNodeName] = useState('');
  return (
    <Container style={styles.container}>
             <h3 style={styles.heading}>CREATE {createNodeData.type.toUpperCase()}</h3>
             <TextField
                    id="outlined-basic"
                    label={`ENTER ${createNodeData.type.toUpperCase()} NAME`}
                    value={nodeName}
                    variant="outlined"
                    style={styles.textField}
                    onChange={(e) => {
                      setNodeName(e.target.value);
                    }}
               />
              <div style={styles.buttonContainer}>
                    <Button variant="outlined" fullWidth onClick={() => addNode(createNodeData, nodeName)}>
                      Create
                    </Button>
              </div>
    </Container>
  );
}
export default CreateChildNode;
