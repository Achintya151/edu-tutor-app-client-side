import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const Login = () => {

    const [error, setError] = useState('');
    const { providerLogin, signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(e => console.error(e))
    }

    const handleGitHubSignIn = () => {
        providerLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(e => console.error(e))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            })
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <div className='text-center text-success'>
                    <h2>Login Now !</h2>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                    <Form.Text className='text-danger'>
                        {error}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <span>New to EduTutor? Please <Link to='/register'>register</Link></span>
                </Form.Group>
                <Button variant="success" type="submit">
                    Login
                </Button>
            </Form>
            <br />
            <hr className='w-50 mx-auto' />
            <br />
            <div className='text-center'>
                <Button onClick={handleGoogleSignIn} variant='light'><FaGoogle></FaGoogle> Login with Google</Button>
                <br />
                <p>or</p>
                <Button onClick={handleGitHubSignIn} variant='dark'><FaGithub></FaGithub> Login with GitHub</Button>
            </div>
        </Container>
    );
};

export default Login;