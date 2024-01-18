import React, { useRef, useState } from "react";
import { Form, Button,Table } from "react-bootstrap";

const Blog = () => {
  const [inputVal, setInputVal] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const nameRef = useRef(null);
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputVal({
      name: nameRef.current.value,
      username: userNameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    });
    nameRef.current.focus()
    userNameRef.current.style.backgroundColor="lightgrey"
  };
  return (
    <div>
      <Form className="formcontainer" onSubmit={handleSubmit}>
        <h2>Details</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            ref={nameRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter User Name"
            name="username"
            ref={userNameRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            ref={emailRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            ref={passRef}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
 <div style={{maxWidth:"500px",marginLeft:"auto",marginRight:"auto"}} className="mt-5">
 <Table striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th>Name</th>
            <td>{inputVal.name}</td>
          </tr>
          <tr>
            <th>User Name</th>
            <td>{inputVal.username}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{inputVal.email}</td>
          </tr>
          <tr>
            <th>Password</th>
            <td>{inputVal.password}</td>
          </tr>
        </thead>

      </Table>
 </div>
    </div>
  );
};

export default Blog;


