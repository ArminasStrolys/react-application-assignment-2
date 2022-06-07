import React from "react";

const ListItem = (props) => {
  return (
    <>
      <a className="detail" href="/details">
        <div className="post">
          <h3>{props.title}</h3>
          <p>{props.body}</p>
          <p>User: {props.userId}</p>
        </div>
      </a>
    </>
  );
};

export default ListItem;
