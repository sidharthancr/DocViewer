import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import _ from 'lodash';
class RightPane extends Component {
    render() {
        return (
            <React.Fragment>
                {_.isEmpty(this.props.selectedFile) ?
                    <Row className="docHeader">No Doc Selected!</Row> :
                    <Row className="docHeader">{this.props.selectedFile}</Row>}
                {_.isEmpty(this.props.selectedFile) ? null :
                    <iframe className="doc" src={"http://localhost:8000/static/" + this.props.selectedFile} />}
            </React.Fragment>
        );
    }
}

export default RightPane;