import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';


const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const course = useLoaderData();
    return (
        <Container>
            <Card className="bg-dark text-white">
                <Card.Img src={course.thumbnail_url} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className='bg-dark bg-opacity-25 p-4'>{course.title}</Card.Title>
                    <Card.Text className='bg-dark bg-opacity-25 p-4'>
                        {course.category_name} course.
                    </Card.Text>
                    <Row>
                        <Col xs={6}>
                            <Button onClick={() => setShow(true)} variant='success'>Take This Course</Button>
                        </Col>
                        <Col xs={6}>
                            <Toast bg='dark' onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                <Toast.Header>
                                    <img
                                        style={{ height: '30px' }}
                                        src={course.thumbnail_url}
                                        className="rounded me-2"
                                        alt=""
                                    />
                                    <strong className="me-auto">{course.category_name} course.</strong>
                                </Toast.Header>
                                <Toast.Body>You have successfully taken the course. Please click course tab for browsing more courses.</Toast.Body>
                            </Toast>
                        </Col>
                    </Row>
                </Card.ImgOverlay>
            </Card>
        </Container>
    );
};

export default CheckOutPage;