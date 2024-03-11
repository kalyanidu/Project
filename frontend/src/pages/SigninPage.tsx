import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';
import { useSigninMutation } from '../hooks/userHooks';
import LoadingBox from '../components/LoadingBox';
import './styles.css'; // Import your custom CSS file

const SigninPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const { mutateAsync: signin, isLoading } = useSigninMutation();

  const submitHandler = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const data = await signin({
        email,
        password,
      });
      dispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err as ApiError) );
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container >
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <div className="signin-container">
        <h1 className="mb-4">Sign In</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit"  disabled={isLoading}>
            {isLoading ? <LoadingBox /> : 'Sign In'}
          </Button>
        </Form>

        <div className="forgot-password">
          <Link to="/forgot-password">Forgot your password?</Link>
        </div>

        <div className="create-account">
          New to our website? <Link to={`/signup?redirect=${redirect}`}>Create an account</Link>
        </div>
      </div>
    </Container>
  );
};

export default SigninPage;
