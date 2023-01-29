import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Response.css";
import {
  clearErrors,
  getSingleResponse,
  deleteResponse,
} from "../../Actions/entryAction";
import { useParams } from "react-router-dom";

const Response = () => {
  const dispatch = useDispatch();
  const { loading, error, response } = useSelector((state) => state.response);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (error) {
      window.alert("There occured some error. Please try again!");
      dispatch(clearErrors);
    }
    dispatch(getSingleResponse(id));
  }, [dispatch, id]);

  const date = new Date(response.createdAt);
  const formattedDate = date.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleDelete = () => {
    dispatch(deleteResponse(id));
    window.location = "/entry";
  };

  return (
    <Fragment>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Fragment>
          <div className="entry">
            <div>
              <h1>{formattedDate.toLowerCase()}</h1>
              <button className="dlt-btn" onClick={handleDelete}>delete</button>
            </div>
            <div className="questions">
              <div>
                <h4>how are you feeling?</h4>
                <p>{response.answer1}</p>
              </div>
              <div>
                <h4> what have you been listening to?</h4>
                <p>{response.answer2}</p>
              </div>
              <div>
                <h4> what have you been watching?</h4>
                <p>{response.answer3}</p>
              </div>
              <div>
                <h4> what do you plan to achieve?</h4>
                <p>{response.answer4}</p>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Response;
