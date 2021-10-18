import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import {$} from 'jquery'

const BranchList = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                <Card.Header>
                            <Card.Title as="h5">Branch History</Card.Title>
                            <span className="d-block m-t-5">
                                use props <code>hover</code> with <code>Table</code> component
                            </span>
                        </Card.Header>
                        
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BranchList ;
