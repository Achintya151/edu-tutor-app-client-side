import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CourseSummeryCard = ({ course }) => {
    const { _id, category_name, title, details, thumbnail_url } = course;

    return (
        <Col lg='4' className='mb-4 d-flex align-items-stretch'>
            <Card>
                <Card.Img style={{ height: '150px' }} variant="top" src={thumbnail_url} />
                <Card.Body className='text-start d-flex flex-column'>
                    <Button className='mb-2' variant="success">{category_name}</Button>
                    <Card.Title className=''>{title}</Card.Title>
                    <Card.Text className='mb-4'>
                        {
                            details.length > 100 ?
                                <>
                                    {details.slice(0, 100) + '...'}
                                </>
                                :
                                details
                        }
                    </Card.Text>
                    <Button as={Link} to={`/course/${_id}`} className='mt-auto' variant="outline-success">Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CourseSummeryCard;