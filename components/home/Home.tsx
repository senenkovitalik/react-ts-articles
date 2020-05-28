import React from "react";
import { Link } from "react-router-dom";

export default ({ articles }) => (
  <div className="card-columns">
    {articles.map(
      ({ _id, title, content, author: { firstname, lastname } }, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content.slice(0, 100)}...</p>
            <p className="card-text">
              <small className="text-muted">
                {firstname} {lastname}
              </small>
            </p>
            <Link to={`/articles/${_id}`} className="btn btn-primary">
              Read more
            </Link>
          </div>
        </div>
      )
    )}
  </div>
);
