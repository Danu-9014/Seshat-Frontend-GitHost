import React, { useState, useEffect } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";

const EditUser = ({ id }) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [password, setPassword] = useState("");
  const [completedBooks, setCompletedBooks] = useState([]);

  const updateShow = () => {
    axios
      .get("http://18.205.107.88:31479/api/user/" + id)
      .then(function (response) {
        setName(response.data.data.name);
        setPassword(response.data.data.password);
        setUserType(response.data.data.userType);
        setCreatedDate(response.data.data.createdDate);
        setCompletedBooks(response.data.data.completedBooks);
        setShow(true);
      });
  };

  async function updateUser(id, name, password, userType) {
    const userData = {
      id,
      name,
      password,
      userType,
      createdDate,
      completedBooks,
    };

    axios
      .put("http://18.205.107.88:31479/api/user/" + id, userData)
      .then(function (response) {
        console.log(response);
        setName("");
        setPassword("");
        setUserType("");
        swal({ text: "Successfully Updated", icon: "success" });
        setShow(false);
      })
      .catch(function (error) {
        console.log(error);
        alert("Not added");
      });
  }

  return (
    <>
      <button id="mybtn" type="button" onClick={updateShow}>
        <i className="fas fa-pencil-alt text-info"></i>
      </button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Child Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="row justify-content-center"></div>
            <Col sm={10}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  User Id
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    type="text"
                    placeholder="Enter User Id "
                    value={id}
                    disabled
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  Your Name
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  Password
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    type="text"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  User Type
                </Form.Label>
                <Col sm="3">
                  <Form.Control
                    type="text"
                    placeholder="User Type"
                    value={userType}
                    onChange={(e) => {
                      setUserType(e.target.value);
                    }}
                  />
                </Col>
                <Col sm={3}>
                  <select
                    className="Col-3"
                    aria-label="Default select example"
                    style={{ height: "35px", width: "200px" }}
                    // onChange={(e) => setTypeOfService(e.target.value)}
                  >
                    <option selected>Select User Type</option>
                    <option value="Self Drive">Reader</option>
                    <option value="With Driver">Author</option>
                  </select>
                </Col>
              </Form.Group>
            </Col>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            type="submit"
            onClick={() => updateUser(id, name, password, userType)}
          >
            Edit
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditUser;
