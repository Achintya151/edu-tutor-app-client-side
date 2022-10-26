import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Container>
            <div className='my-5 text-capitalize'>
                <h1>page can’t be found</h1>
            </div>
            <Button as={Link} to='/'>Go back to home</Button>
        </Container>
    );
};

export default ErrorPage;