import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import LoginForm from "../../components/login-form/LoginForm";
import "./AuthPage.scss";

const AuthPage = () => (
  <div className="AuthPage" text>
    <Segment>
      <Header as="h3">Welcome to Overnote! Please Sign In.</Header>
      <LoginForm />
    </Segment>
  </div>
);

export default AuthPage;
