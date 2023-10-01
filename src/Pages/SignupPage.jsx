import React, { useContext } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
function SignupPage() {
  const {
    dataHandler,
    submitHandler,
    passwordSameOrNotValidation,
    passwordMissMatchMsg,
  } = useContext(DataContext);

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card className="px-4">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center text-uppercase ">
                  Logo
                </h2>
                <div className="mb-3">
                  <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="Name">
                      <Form.Label className="text-center">Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        name="username"
                        onChange={dataHandler}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Email address
                      </Form.Label>
                      <Form.Control
                        onChange={dataHandler}
                        type="email"
                        placeholder="Enter email"
                        name="email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="password1">Password</Form.Label>
                      <Form.Control
                        id="password1"
                        onChange={dataHandler}
                        type="password"
                        placeholder="Password"
                        name="password1"
                      />
                      {passwordMissMatchMsg && <p>"Password missmatch"</p>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="password2">
                        Confirm Password
                      </Form.Label>
                      <Form.Control
                        onChange={dataHandler}
                        id="password2"
                        type="password"
                        placeholder="Password"
                        name="password2"
                      />
                      {passwordMissMatchMsg && <p>"Password missmatch"</p>}
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicCheckbox"
                    ></Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Create Account
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3">
                    <p className="mb-0  text-center">
                      Already have an account??{" "}
                      <Link to="/login"> Sign In</Link>
                      {/* <a href="{''}" className="text-primary fw-bold">
                       
                      </a> */}
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupPage;
