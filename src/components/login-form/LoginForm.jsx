import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

import "./LoginForm.scss";

const LoginForm = () => (
  <Form className="LoginForm">
    <Form.Field>
      <label>Email</label>
      <input placeholder="Email..." />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder="Password..." />
      <a href="#">forgot password?</a>
    </Form.Field>
    <Button color="blue" type="submit">
      Login
    </Button>
  </Form>
);

export default LoginForm;
