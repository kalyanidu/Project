import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import { useForgotPasswordMutation } from '../hooks/userHooks';
import LoadingBox from '../components/LoadingBox';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';
import './styles.css'; // Import your custom CSS file

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutateAsync: forgotPassword, isLoading } = useForgotPasswordMutation();

  const submitHandler = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await forgotPassword({ email, password });
      toast.success('Password reset instructions sent to your email.');
    } catch (error) {
      toast.error(getError(error as ApiError));
    }
  };

  return (
    <Container className="py-5">
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      
      <div className="forgot-password-container">
      <h1 className="my-4">Forgot Password</h1>
      <Form onSubmit={submitHandler} >
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <div className="mb-3">
          <Button disabled={isLoading} type="submit">
            {isLoading ? <LoadingBox /> : 'Reset Password'}
          </Button>
        </div>
      </Form>
      <div className="back-to-signin">
        <Link to="/signin">Back to Sign In</Link>
      </div>
      </div>
    </Container>
  );
}
