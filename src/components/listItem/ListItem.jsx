import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  return (
    <>
      <Link className="detail" to="/details" state={props.id}>
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
      </Link>
    </>
  );
};

export default ListItem;
