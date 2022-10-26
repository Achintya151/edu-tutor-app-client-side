import React from 'react';
import logo from '../../../Assets/Brands/Edu tutor.png'
import { Image, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoon, FaUser } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            username
        </Tooltip>
    );
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-4'>
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
                    <Nav className="ms-auto" variant="tabs" defaultActiveKey="/home">
                        <Nav.Link as={NavLink} to='/courses'>Courses</Nav.Link>
                        <Nav.Link as={NavLink} to='/faq'>FAQ</Nav.Link>
                        <Nav.Link as={NavLink} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link as={NavLink} to='/home'>
                            <span className='pe-2'>Dark Mode</span>
                            <FaMoon></FaMoon>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Button variant="light">
                                    <FaUser></FaUser>
                                </Button>
                            </OverlayTrigger>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;