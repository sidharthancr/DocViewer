import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class LeftPane extends Component {
    render() {
        return (
            <Navbar className="nav-bar" bg="light" expand="lg" sticky="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto flex-column">
                        <div className="upload-btn-wrapper">
                            <span className="files">  FILES </span>
                            <span className="btn">Upload  <input className="upload-img" type="image" src="upload.png" alt="Submit" /></span>
                            <input id="file"
                                className="file-input"
                                type='file' label='Upload' accept='.pdf, .txt'
                                onChange={this.props.onChangeHandler} />
                        </div>
                        {this.props.getNav(this.props.uploadedFiles)}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>);
    }
}

export default LeftPane;