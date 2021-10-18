import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import {$} from 'jquery'
import Newvisastep from './NewVisaSteps';
const BootstrapTable = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                 
                    <Card>
                    <Newvisastep/>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BootstrapTable;
