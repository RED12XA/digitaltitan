import React, { useState } from 'react';
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  Alert
} from 'react-bootstrap';

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState(null);

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setFormData({ email: '', password: '', name: '' });
    setError(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation check
    if (!formData.email || !formData.password || (isRegister && !formData.name)) {
      setError('Please fill in all required fields.');
      return;
    }

    // TODO: Integrate with backend logic
    if (isRegister) {
      console.log('Registering:', formData);
    } else {
      console.log('Logging in:', formData);
    }

    // Reset or redirect here
    setError(null);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <h3 className="text-center mb-4">
                {isRegister ? 'Create Account' : 'Welcome Back'}
              </h3>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                {isRegister && (
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                )}

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  {isRegister ? 'Register' : 'Login'}
                </Button>
              </Form>

              <div className="text-center mt-3">
                <small>
                  {isRegister
                    ? 'Already have an account? '
                    : 'Don’t have an account? '}
                  <span
                    onClick={toggleForm}
                    style={{ color: '#007bff', cursor: 'pointer' }}
                  >
                    {isRegister ? 'Login here' : 'Register here'}
                  </span>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthForm;
