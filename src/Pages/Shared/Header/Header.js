import React from 'react';
import logo from '../../../Assets/Brands/Edu tutor.png'
import { Image, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoon, FaUser } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Link } from 'react-router-dom';


const Header = () => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            username
        </Tooltip>
    );
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand className='d-flex justify-content-between align-items-center' as={Link} to='/'>
                    <div className='pe-2'>
                        <Image
                            style={{ height: '60px' }}
                            thumbnail
                            src={logo}
                        ></Image>
                    </div>
                    <h2>EduTutor</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/courses'>Courses</Nav.Link>
                        <Nav.Link as={Link} to='/faq'>FAQ</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link as={Link} to='/'>
                            <span className='pe-2'>Dark Mode</span>
                            <FaMoon></FaMoon>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Button variant="light">
                                <FaUser></FaUser>
                            </Button>
                        </OverlayTrigger>
                        <Nav.Link href="#deets">

                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;