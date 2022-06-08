import React, { useState, useEffect } from "react";

const NewRecordForm = () => {
  const [newPost, setNewPost] = useState();
  const [visible, setVisible] = useState(true);
  const [userPost, setUserPost] = useState({
    body:'',
    title:'',
    userId:''
  })

  const handleVisibility = (e) => {
    e.preventDefault();
    visible === true ? setVisible(false) : setVisible(true);
  };

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  useEffect(() => {
    const createPost = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({  userId: userPost.userId, title: userPost.title, body: userPost.body })
    };
    fetch('https://jsonplaceholder.typicode.com/posts', createPost)
        .then(response => response.json())
        .then(data => console.log(data));
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
        <form onSubmit={(e) => e.preventDefault()} className="new-form-page">
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
                    <textarea
                      id="w3review"
                      name="w3review"
                      rows="4"
                      cols="50"
                      placeholder="Enter context here"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>User name: </label>
                    <input type="text" placeholder="Enter your name here" onChange={handleChange}/>
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
                    <b>TITLE</b>
                  </td>
                </tr>
                <tr>
                  <td>BODY</td>
                </tr>
                <tr>
                  <td>USER</td>
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
