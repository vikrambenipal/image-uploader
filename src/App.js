import React from 'react';
import './App.css';
import Image from './image.svg';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const Uploader = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-style: dashed;
`

function App() {
  return (
    <div className="App">
      <Card>
        <h1>Upload your image</h1>
        <p>File should be Jpeg, Png,...</p>
        <Uploader>
          <img src={Image} />
          <p>Drag and drop your image here</p>
          <p>Or</p>
        </Uploader>
        <Button>Choose a file</Button>
      </Card>
    </div>
  );
}

export default App;
