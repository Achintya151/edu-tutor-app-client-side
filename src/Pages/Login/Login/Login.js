import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(e => console.error(e))
    }

    return (
        <Container>
            <Form className='w-50 mx-auto'>
                <div className='text-center text-success'>
                    <h2>Login Now</h2>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <span>New to EduTutor? Please <Link to='/register'>register</Link></span>
                </Form.Group>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
            <br />
            <hr className='w-50 mx-auto' />
            <br />
            <div className='text-center'>
                <Button onClick={handleGoogleSignIn} variant='light'><FaGoogle></FaGoogle> Login with Google</Button>
                <br />
                <p>or</p>
                <Button variant='dark'><FaGithub></FaGithub> Login with GitHub</Button>
            </div>
        </Container>
    );
};

export default Login;