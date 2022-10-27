import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import brand from '../../Assets/Brands/Edu tutor.png'
import brand2 from '../../Assets/Brands/Introduction to Cyber Security.png'
import brand3 from '../../Assets/Brands/Web Security.png'

const Home = () => {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: '525px' }}
                        className="d-block w-100"
                        src={brand}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to EduTutor!</h3>
                        <p>We provided courses on IT and development.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '525px' }}
                        className="d-block w-100"
                        src={brand2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Visit our courses</h3>
                        <p>Click the courses Tab to explore the courses we offer.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '525px' }}
                        className="d-block w-100"
                        src={brand3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Dive into New realm of Knowledge</h3>
                        <p>
                            Our team always try to provide you best services.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Home;