import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import FormControl from 'react-bootstrap/esm/FormControl';
import { ListOutline, CloseOutline, CheckmarkOutline } from 'react-ionicons'
import { useState, useRef } from 'react';
import ToDoApp from './bindings/ToDoApp'
import store from "./redux/store"
//======================================
function App() {
  return (
    <div className="App">
      <ToDoApp></ToDoApp>
    </div >
  );
}

export default App;
