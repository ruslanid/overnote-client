import React from "react";
import { Segment, Header, Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./LoginPage.scss";

const LoginPage = () => (
  <div className="LoginPage">
    <Segment>
      <Header as="h3">Welcome to Overnote! Please Log In.</Header>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input type="text" placeholder="Email..." />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password..." />
          <a href="#">forgot password?</a>
        </Form.Field>
        <div className="login">
          <Button color="blue" type="submit">
            Login
          </Button>
          <div>
            <span>Don't have an account?</span>&nbsp;
            <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </Form>
    </Segment>
  </div>
);

export default LoginPage;
