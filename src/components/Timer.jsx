import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

const Timer = ({ id }) => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  const handleStart = () => {
    setStartTime(Date.now());
    setIsRunning(true);
  };

  const handleEnd = () => {
    setIsRunning(false);
    setEndTime(Date.now());
    // Save time to DynamoDB
    saveTimeToDynamoDB();
  };

  const saveTimeToDynamoDB = () => {
    const elapsedTimeInSeconds = Math.floor(elapsedTime / 1000);
    // Fetch user details
    axios
      .get(`http://18.205.107.88:31479/api/user/${id}`)
      .then((response) => {
        const userData = response.data;
        // Append session duration to sessions array
        const session = { sessionStart: startTime, sessionEnd: endTime };
        const updatedUserData = {
          ...userData,
          sessions: userData.sessions
            ? [...userData.sessions, session]
            : [session],
        };
        // Save updated user data to DynamoDB
        axios
          .put(`http://18.205.107.88:31479/api/user/${id}`, updatedUserData)
          .then((response) => {
            swal({
              text: "Time and session saved to DynamoDB",
              icon: "success",
              buttons: {
                cancel: { text: "Cancel" },
                confirm: { text: "Ok" },
              },
            });
          })
          .catch((error) => {
            alert("Error saving time and session to DynamoDB:", error);
            swal("Error saving time and session to DynamoDB:", "error");
          });
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  };

  return (
    <div>
      <div>Elapsed Time: {formatTime(elapsedTime)}</div>
      <button
        className="btn btn-primary"
        onClick={handleStart}
        disabled={isRunning}
      >
        Start
      </button>{" "}
      {/* Adding a space */}
      <button
        className="btn btn-primary"
        onClick={handleEnd}
        disabled={!isRunning}
      >
        End
      </button>
    </div>
  );
};

const formatTime = (time) => {
  const seconds = Math.floor(time / 1000) % 60;
  const minutes = Math.floor(time / (1000 * 60)) % 60;
  const hours = Math.floor(time / (1000 * 60 * 60)) % 24;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export default Timer;
