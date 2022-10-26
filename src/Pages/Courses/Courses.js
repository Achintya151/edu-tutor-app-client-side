import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftsideNav from '../Shared/LeftsideNav/LeftsideNav';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col lg='7'>
                    <h2>Courses display here</h2>
                </Col>
                <Col lg='5'>
                    <LeftsideNav></LeftsideNav>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;