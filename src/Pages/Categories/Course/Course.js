import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftsideNav from '../../Shared/LeftsideNav/LeftsideNav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaFilePdf } from 'react-icons/fa';


const Course = () => {
    const course = useLoaderData();
    return (
        <Container>
            <Row>
                <Col lg='9'>
                    <Card className="text-center">
                        <Card.Header className='d-flex justify-content-between'>
                            <div>
                                <h3>{course.title}</h3>
                            </div>
                            <div>
                                <Button variant='light'><FaFilePdf></FaFilePdf></Button>
                            </div>
                        </Card.Header>
                        <Card.Img style={{ height: '450px' }} variant="top" src={course.thumbnail_url} />
                        <Card.Body className='text-start'>
                            <Card.Title>Course Description:</Card.Title>
                            <hr />
                            <Card.Text>
                                {course.details}
                            </Card.Text>
                            <Button variant="success">Get Premium Access</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg='3'>
                    <LeftsideNav></LeftsideNav>
                </Col>
            </Row>
        </Container>
    );
};

export default Course;