import React, { useState } from "react";
 import {  useNavigate } from "react-router-dom";
 import { Form, Alert } from "react-bootstrap";
// import { useUserAuth } from "../contexts/UserAuthContext";
import styled from "styled-components";

const Button = styled.button`
  background-color:  rgb(190, 42, 183);
  padding: 10px;
  border-radius: 5px;
  color: white;
  border: none;
  font-size: 20px;
  width: 50;

  &:hover {
    background-color: white;
    color:  rgb(190, 42, 183);
    border: 2px solid purple;
  }
`;

const Login = () => {
 
 

  return (
    <>
      <div className="p-4 box" style={{ width: "50%", margin: "100px auto" }}>
        <h2 className="mb-3 text-center">Sign In</h2>
     
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
      </div>
    </>
  );
};

export default Login;
