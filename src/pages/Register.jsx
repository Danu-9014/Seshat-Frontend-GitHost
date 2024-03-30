import React from 'react'
import MainNavBar from '../components/MainNavBar';
import {useState} from 'react';
import swal from 'sweetalert'
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Reader");

  async function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      id,
      name,
      password,
      userType
    }
    // console.log(userData,"user");
    if (name.length === 0 || id.length === 0 || password.length === 0) {
      swal("Fields cannot be empty", "Please enter all data!", "error");
    } else {
      console.log(userData, "userdata");
      axios
        .post("http://18.205.107.88:31479/api/user", userData)
        .then(function (response) {
          console.log(response.data);
          setId("");
          setName("");
          setPassword("");
          swal({
            text: "Successfully added",
            icon: "success",
            buttons: {
              cancel: { text: "Cancel" },
              confirm: { text: "Ok" },
            },
          }).then(() => {
            window.location.href = "/login";
          });
        })
        .catch(function (error) {
          console.log(error);
          alert("Not added");
        });
    }
  }
  return (
    <>
      <MainNavBar/>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card" style={{ width: "75%" }}>
          <section className="card-body">
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form>
                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                      <p className="lead fw-normal mb-0 me-3">Sign up with</p>
                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </button>
                    </div>

                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control form-control-lg"
                        placeholder="Enter user Id"
                        value={id}
                        onChange={(e)=>setId(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        User Id
                      </label>
                    </div>
                    {/* <!-- Name input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control form-control-lg"
                        placeholder="Enter a name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Name
                      </label>
                    </div>
                    {/* 
                  <!-- Password input --> */}
                    <div className="form-outline mb-3">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control form-control-lg"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value);console.log(password,"pass")}}
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>

                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4">
                        User Type
                      </label>
                      <select
                        id="form3Example4"
                        className="form-select form-select-lg"
                        aria-label="User Type"
                        onChange={(e)=>setUserType(e.target.value)}
                        value={userType}
                      >
                        <option value="Reader">Reader</option>
                        <option value="Author">Author</option>
                      </select>
                      
                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{ paddingLeft: " 2.5rem", paddingRight: "2.5rem" }}
                        onClick={handleSubmit}
                      >
                        Register
                      </button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Already have an account?{" "}
                        <a href="/login" className="link-danger">
                          Login
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Register
