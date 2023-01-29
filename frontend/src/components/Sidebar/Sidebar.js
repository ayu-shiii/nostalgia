import React, { Fragment, useEffect } from "react";
import "./Sidebar.css";
import { getEntries } from "../../Actions/entryAction";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();

  const { loading, error, responses } = useSelector((state) => state.responses);

  useEffect(() => {
    dispatch(getEntries());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="entry">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : responses && responses.length > 0 ? (
          <div>
            {responses
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((responses) => (
                <div className="entry-title">
                  <Link to={`/response/${responses._id}`} key={responses.id}>
                    {new Intl.DateTimeFormat("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                      .format(new Date(responses.createdAt))
                      .toLowerCase()}
                  </Link>
                </div>
              ))}
          </div>
        ) : (
          <p>No data found.</p>
        )}
      </div>
    </Fragment>
  );
};

export default Sidebar;
