import React from "react";
import { Segment, Header, Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./SignupPage.scss";

const SignupPage = () => (
  <div className="SignupPage">
    <Segment>
      <Header as="h3">Welcome to Overnote! Please Sign up.</Header>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input type="text" placeholder="Name..." />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input type="text" placeholder="Email..." />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password..." />
        </Form.Field>
        <Form.Field>
          <label>Confirm password</label>
          <input type="password" placeholder="Confirm password..." />
        </Form.Field>
        <div className="signup">
          <Button color="blue" type="submit">
            Sign up
          </Button>
          <div>
            <span>Already have an account?</span>&nbsp;
            <Link to="/login">Login</Link>
          </div>
        </div>
      </Form>
    </Segment>
  </div>
);

export default SignupPage;
