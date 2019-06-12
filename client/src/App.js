import React, { Component } from 'react';
import './App.scss';

import LeftPane from './LeftPane';
import RightPane from './RightPane';
import {Nav, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import _ from 'lodash';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFiles: [],
      selectedFile: ""
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.fileSelect = this.fileSelect.bind(this);
    this.getNav = this.getNav.bind(this);

  }

  onChangeHandler(event) {
    if(!event.target.files[0]){return;}
    const name = event.target.files[0].name;
    const data = new FormData();
    data.append('file', event.target.files[0])
    axios.post("http://localhost:8000/upload", data, {}).then(res => {
      this.setState({ "uploadedFiles": this.state.uploadedFiles.concat([name]) });
      alert("File Uploaded!")
    }, (error) => { alert("Error while File Uploaded:(") });
  }

  fileSelect(e) {
    this.setState({ "selectedFile": e.target.name });
  }

  getNav(fileNames) {
    return fileNames.map((name) => {
      return <Nav.Item key={name}><Nav.Link className={"nav-link " + (_.isEqual(name, this.state.selectedFile) ? "selectedNav" : "")}
        name={name}  onClick={this.fileSelect.bind(this)}>{name}</Nav.Link></Nav.Item >
    })
  }

  render() {
    return (
      <div className="App">
        <Row className="panel">
          <Col sm="12" md="3" className="left-pane" >
         <LeftPane  getNav={this.getNav} onChangeHandler={this.onChangeHandler} uploadedFiles={this.state.uploadedFiles}/>
          </Col>
          <Col  sm="12" md="9" className="right-pane">
          <RightPane selectedFile={this.state.selectedFile}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
