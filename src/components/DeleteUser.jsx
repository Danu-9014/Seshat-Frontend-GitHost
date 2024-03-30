import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";

const DeleteUser = ({id}) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  function submitForm(e) {
    e.preventDefault();
    axios
      .delete(`http://18.205.107.88:31479/api/user/${id}`)
      .then(function (response) {
        swal({ text: "User Successfully Deleted", icon: "success" });
        setShow(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  } 

  return (
    <>
      <button id="mybtn" type="button" onClick={handleShow}>
        <i class="fas fa-trash text-danger"></i>
      </button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Child Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Are you sure you want to delete this child details?</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit" onClick={submitForm}>
            Yes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteUser;
