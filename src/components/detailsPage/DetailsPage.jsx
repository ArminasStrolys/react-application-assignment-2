import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'

const DetailsPage = (props) => {
  const [details, setDetails] = useState([]);
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${data}`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((error) => console.log(error));
  }, [data]);

  return (
    <div>
      <form action="/">
        <button className="button-style" type="submit">
          Back
        </button>
      </form>
      <br />
      <div className="detail-item">
        <table>
          <tbody>
            <tr>
            {props.test}
              <td>
                <b>{details.title}</b>
              </td>
            </tr>
            <tr>
              <td>{details.body}</td>
            </tr>
            <tr>
              <td>User: {details.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailsPage;
