import React from "react";

const ListItem = (props) => {
  return (
    <>
      <div className="post">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <p>User: {props.userId}</p>
      </div>
    </>
  );
};

export default ListItem;
