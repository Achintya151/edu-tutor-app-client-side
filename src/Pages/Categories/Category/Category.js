import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummeryCard from '../../Shared/CourseSummeryCard/CourseSummeryCard';
import LeftsideNav from '../../Shared/LeftsideNav/LeftsideNav';

const Category = () => {
    const courses = useLoaderData();
    return (
        <Container>
            <Row>
                <Col lg='9'>
                    <Row>
                        {
                            courses.map(course => <CourseSummeryCard
                                key={course._id}
                                course={course}
                            ></CourseSummeryCard>)
                        }
                    </Row>
                </Col>
                <Col lg='3'>
                    <LeftsideNav></LeftsideNav>
                </Col>
            </Row>
        </Container>
    );
};

export default Category;