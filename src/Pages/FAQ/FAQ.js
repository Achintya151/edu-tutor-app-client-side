import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const FAQ = () => {
    return (
        <Container>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Who we are?</Accordion.Header>
                    <Accordion.Body>
                        We are an educational institution.We offer courses of modern era of technology. We have no physical institute. We only offer courses online.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is our purpose?</Accordion.Header>
                    <Accordion.Body>
                        Our purpose is to spread education in every aspect of society. As we targeted a vast majority of people, we selected online platform as medium.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What are the courses?</Accordion.Header>
                    <Accordion.Body>
                        We offer courses on seven popular subjects, such as, python, php, javascript, mobile app development, game development , software development.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default FAQ;