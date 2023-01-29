import React, { Fragment, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import "./Entry.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createResponse } from "../../Actions/entryAction";
import { CREATE_ENTRY_RESET } from "../../Constants/entryConstant";
import { useNavigate } from "react-router-dom";

const Entry = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [feeling, setFeeling] = useState("");
  const [listening, setListening] = useState("");
  const [watching, setWatching] = useState("");
  const [plan, setPlan] = useState("");

  const { loading, error, success } = useSelector((state) => state.newResponse);

  const [date, setDate] = useState(new Date());
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const clearForm = () => {
    setFeeling("");
    setListening("");
    setWatching("");
    setPlan("");
  };

  useEffect(() => {
    if (error) {
      window.alert(error);
      dispatch(clearErrors);
    }
    if (success) {
      window.alert("We added your response!");
      setTimeout(function () {
        navigate("/entry");
      }, 1000);
      dispatch({ type: CREATE_ENTRY_RESET });
    }
  }, [dispatch, error, success]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("answer1", feeling);
    myForm.set("answer2", listening);
    myForm.set("answer3", watching);
    myForm.set("answer4", plan);

    dispatch(createResponse(myForm));
    window.alert("We added your response!");
    window.location = "/entry";
  };

  return (
    <Fragment>
      <div className="grid-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="form">
          <form id="form">
            <div className="form-header">
              <h1>{date.toLocaleDateString("en-US", options).toLowerCase()}</h1>
              <div className="form-button">
                <a onClick={handleSubmit}>save</a>
                <a onClick={clearForm}>clear</a>
              </div>
            </div>
            <label>
              how are you feeling?
              <br />
              <textarea
                type="text"
                rows={3}
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
              />
            </label>
            <br />
            <label>
              what have you been listening to?
              <br />
              <textarea
                type="text"
                rows={3}
                value={listening}
                onChange={(event) => setListening(event.target.value)}
              />
            </label>
            <br />
            <label>
              what have you been watching?
              <br />
              <textarea
                type="text"
                rows={3}
                value={watching}
                onChange={(event) => setWatching(event.target.value)}
              />
            </label>
            <br />
            <label>
              what do you plan to achieve?
              <br />
              <textarea
                type="text"
                rows={2}
                value={plan}
                onChange={(event) => setPlan(event.target.value)}
              />
            </label>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Entry;
