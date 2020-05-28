import React from "react";
import { useHistory } from "react-router-dom";
import "./Article.css";

export default ({
  data: {
    author: { firstname, lastname },
    title,
    content,
    createdAt
  }
}) => {
  let history = useHistory();
  return (
    <div>
      <h2>{title}</h2>
      {content.split("\n\n").map((paragraph, i) => (
        <p className="paragraph" key={i}>
          {paragraph}
        </p>
      ))}

      <div>
        <span style={{ display: "inline-block" }}>
          {firstname} {lastname}
          <br />
          {new Date(createdAt).toLocaleDateString()}
        </span>

        <a
          href="#"
          style={{ float: "right" }}
          onClick={e => {
            e.preventDefault();
            history.goBack();
          }}
        >
          {"<<"} Back
        </a>
      </div>
    </div>
  );
};
