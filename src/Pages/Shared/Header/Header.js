import React from 'react';
import logo from '../../../Assets/Brands/Edu tutor.png'
import { Image, InputGroup, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoon, FaSun, FaUser } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useState } from 'react';
import { ThemeContext, themes } from '../../../contexts/ThemeContext/ThemeContext';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [darkMode, setDarkMode] = useState(true);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
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
                        <>
                            {
                                user ?
                                    <>
                                        <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip}
                                        >
                                            <Button variant="light">
                                                {
                                                    user?.photoURL ?
                                                        <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                                        :
                                                        <FaUser></FaUser>
                                                }
                                            </Button>
                                        </OverlayTrigger>
                                        <Button onClick={handleLogOut} variant='dark'>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
                                        <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
                                    </>
                            }
                        </>
                    </Nav>
                    <Nav>
                        <InputGroup>
                            <ThemeContext.Consumer>
                                {({ changeTheme }) => (
                                    <Button variant={darkMode ? 'light' : 'dark'} onClick={() => {
                                        setDarkMode(!darkMode);
                                        changeTheme(darkMode ? themes.light : themes.dark)
                                    }} >
                                        {
                                            darkMode ?
                                                <>
                                                    <span className='pe-2'>Light Mode</span>
                                                    <FaSun></FaSun>
                                                </>
                                                :
                                                <>
                                                    <span className='pe-2'>Dark Mode</span>
                                                    <FaMoon></FaMoon>
                                                </>
                                        }
                                    </Button>
                                )}
                            </ThemeContext.Consumer>
                        </InputGroup>
                        <Nav.Link as={NavLink} to='/home'>

                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;