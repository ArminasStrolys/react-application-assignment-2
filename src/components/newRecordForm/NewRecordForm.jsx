import React, { useState, useEffect } from "react";

const NewRecordForm = () => {
  const [newPost, setNewPost] = useState([]);
  const [visible, setVisible] = useState(true);
  const [userPost, setUserPost] = useState({
    body: "",
    title: "",
    userId: "",
  });

  const handleVisibility = (e) => {
    e.preventDefault();
    visible === true ? setVisible(false) : setVisible(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setVisible(false);
    console.log(newPost);
  };

  const handleInputChange = (e, data) => {
    const copyNewPost = { ...userPost };
    copyNewPost[data] = e.target.value;
    setUserPost(copyNewPost);
  };

  useEffect(() => {
    const createPost = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userPost.userId,
        title: userPost.title,
        body: userPost.body,
      }),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", createPost)
      .then((response) => response.json())
      .then((data) => setNewPost(data));
  }, [userPost.body, userPost.title, userPost.userId]);

  return (
    <div>
      <form action="/">
        <button className="button-style" type="submit">
          Back
        </button>
      </form>
      <>
        <form onSubmit={handleChange} className="new-form-page">
          <div className="post">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <label>Title: </label>
                    <input
                      type="text"
                      placeholder="Enter title here"
                      required="required"
                      onChange={(e) =>
                        setUserPost({ ...userPost, title: e.target.value })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Context: </label>
                    <textarea
                      id="w3review"
                      name="w3review"
                      rows="4"
                      cols="50"
                      placeholder="Enter context here"
                      required="required"
                      onChange={(e) =>
                        setUserPost({ ...userPost, body: e.target.value })
                      }
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>User name: </label>
                    <input
                      type="text"
                      required="required"
                      placeholder="Enter your name here"
                      onChange={(e) => handleInputChange(e, "userId")}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="form-submit-btn" type="submit">
              Post
            </button>
          </div>
        </form>
        <div
          style={{ display: visible === true ? "none" : "block" }}
          className="post-pop-up"
        >
          <form onSubmit={handleVisibility}>
            <button type="submit" className="close-window">
              X
            </button>
          </form>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>{newPost.title}</b>
                  </td>
                </tr>
                <tr>
                  <td>{newPost.body}</td>
                </tr>
                <tr>
                  <td>Author: {newPost.userId}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    </div>
  );
};

export default NewRecordForm;
