import React, { useState, useEffect } from "react";

const NewRecordForm = () => {
  const [newPost, setNewPost] = useState([]);

  useEffect(() => {
    const createPost = {
      method: "POST",
      body: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      id: 198,
      title: "Lorem testum",
      userId: 111,
    };

    fetch(`https://jsonplaceholder.typicode.com/posts`, createPost)
      .then((res) => res.json())
      .then((data) => setNewPost(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(newPost);

  return (
    <div>
      <form action="/">
        <button className="back-button" type="submit">
          Back
        </button>
      </form>
      <>
        <form className="detail" to="/details">
          <div className="post">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <label>Title: </label>
                    <input type="text" placeholder="Enter title here" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Context: </label>
                    {/* <input className="context" type="text" placeholder="Enter context here" /> */}
                    <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Enter context here"></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>User name: </label>
                    <input type="text" placeholder="Enter your name here" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </>
    </div>
  );
};

export default NewRecordForm;
