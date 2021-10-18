/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';

const Newuser = () => {
    const [validated, setValidated] = useState(false);
    const [validatedTooltip, setValidatedTooltip] = useState(false);
    const [supportedCheckbox, setSupportedCheckbox] = useState(false);
    const [supportedRadio, setSupportedRadio] = useState(false);
    const [supportedSelect, setSupportedSelect] = useState(0);
    const [supportedFile, setSupportedFile] = useState(0);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const handleSubmitTooltip = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidatedTooltip(true);
    };

    const supportedSelectHandler = (event) => {
        setSupportedSelect(parseInt(event.target.value));
    };

    const supportedFileHandler = (event) => {
        setSupportedFile(!!event.target.value);
    };

    return (
        <React.Fragment>
            <Row>
       
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Add New User</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form noValidate validated={validated}>
                                <Form.Row>
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control required type="text" placeholder="First name"  />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control required type="text" placeholder="Last name"  />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                        <Form.Label>Email</Form.Label>
                                        <InputGroup>
                                        
                                            <Form.Control
                                                type="email"
                                                placeholder="Email"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">Email field require!</Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="text" placeholder="Phone" required />
                                        <Form.Control.Feedback type="invalid">Please provide a valid Phone number.</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Label>Organization</Form.Label>
                                        <Form.Control type="text" placeholder="Organization" required />
                                        <Form.Control.Feedback type="invalid">Please provide a valid Phone number.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                                        <Form.Label>Role</Form.Label>
                                        <Form.Control type="text" placeholder="Role" required />
                                        <Form.Control.Feedback type="invalid">Please provide a valid Country.</Form.Control.Feedback>
                                    </Form.Group>
                                   
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} md="6" controlId="validationCustom07">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="text" placeholder="Organization" required />
                                        <Form.Control.Feedback type="invalid">Please provide a valid Phone number.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom08">
                                        <Form.Label>Comfirm Password</Form.Label>
                                        <Form.Control type="text" placeholder="Role" required />
                                        <Form.Control.Feedback type="invalid">Password should match.</Form.Control.Feedback>
                                    </Form.Group>
                                   
                                </Form.Row>
                            
                                <Form.Group>
                                    <Form.Check
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                    />
                                </Form.Group>
                                <Button className="btn-square " onClick={(e) => handleSubmit(e)}>Add branch</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
               
              
              
               
                
               
               
            </Row>
        </React.Fragment>
    );
};

export default Newuser;
