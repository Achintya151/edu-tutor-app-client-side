import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Category from '../Categories/Category/Category';
import LeftsideNav from '../Shared/LeftsideNav/LeftsideNav';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <Container>
            <Row>
                <Col lg='7'>
                    <h2>courses:{courses.length}</h2>
                </Col>
                <Col lg='5'>
                    <LeftsideNav></LeftsideNav>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;