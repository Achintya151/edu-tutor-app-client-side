import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Blogs = () => {
    return (
        <Container>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is `cors`?</Accordion.Header>
                    <Accordion.Body>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using `firebase`? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        <p>Google Analytics for Firebase allows you to track your users’ journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices. According to Google, Firebase provides unlimited free reporting on up to 500 distinct events. Just like the regular Google Analytics, Google Analytics for Firebase automatically tracks certain key events and user parameters straight out of the box, and allows you to define custom events that are important to your application. Lastly, Google Analytics for Firebase tracks and integrates with various analytical partners such as Google Ads, Admob, TradeMob, and many more</p>
                        <br />
                        <p>Other options to Authentication</p>
                        <ul>
                            <li>Auth0</li>
                            <li>Okta</li>
                            <li>MongoDB</li>
                            <li>Passport</li>
                            <li>Amazon cognito</li>
                            <li>Keycloak</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.

                        The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        <p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.</p>
                        <p>Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. Typically, behavior is defined through callbacks at the beginning of a script, and at the end a server is started through a blocking call like EventMachine::run(). In Node.js, there is no such start-the-event-loop call. Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript — the event loop is hidden from the user.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blogs;