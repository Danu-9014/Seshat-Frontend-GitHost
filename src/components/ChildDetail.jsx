import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

const ChildDetail = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get("http://18.205.107.88:31479/api/user")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  });
  return (
    <>
      <section class="mb-4">
        <div class="card">
          <div class="card-header text-center py-3">
            <h5 class="mb-0 text-center">
              <strong>Child Current Reading</strong>
            </h5>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th scope="col">Child Name</th>
                    <th scope="col">Currently Reading Book</th>
                    <th scope="col">No of Pages Read</th>
                    <th scope="col">Author</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user) => (
                    <tr key={user.id}>
                      <td>{user?.name}</td>
                      <td>{user?.readingBook?.name}</td>
                      <td>{user?.noOfPagesRead}</td>
                      <td>{user?.readingBook?.author}</td>
                    </tr>
                  ))}
                  {/* <tr>
                    <td>
                      <span class="text-danger">
                        <i class="fas fa-caret-down me-1"></i>
                        <span>-17,654</span>
                      </span>
                    </td>
                    <td>
                      <span class="text-success">
                        <i class="fas fa-caret-up me-1"></i>
                        <span>28</span>
                      </span>
                    </td>
                    <td>
                      <span class="text-success">
                        <i class="fas fa-caret-up me-1"></i>
                        <span>111</span>
                      </span>
                    </td>
                    <td>
                      <span class="text-success">
                        <i class="fas fa-caret-up me-1"></i>
                        <span>$1,092.72</span>
                      </span>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChildDetail