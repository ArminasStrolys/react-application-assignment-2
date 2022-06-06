import React from "react";

const ListItem = (props) => {
  return (
    <>
      <div className="post">
        <p>Title: {props.title}</p>
        <p>User: {props.userId}</p>
      </div>
    </>
  );
};

export default ListItem;
