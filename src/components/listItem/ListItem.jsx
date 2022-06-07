import React from "react";

const ListItem = (props) => {
  return (
    <>
      <a className="detail" href="/details">
        <div className="post">
          <table>
            <tbody>
              <tr>
                <td>
                  <b>{props.title}</b>
                </td>
              </tr>
              <tr>
                <td>{props.body}</td>
              </tr>
              <tr>
                <td>User: {props.userId}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </a>
    </>
  );
};

export default ListItem;
