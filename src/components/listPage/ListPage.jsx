import React, { useState, useEffect } from "react";
import ListItem from "../listItem/ListItem";

const ListPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(posts);

  return (
    <div>
      <div className="new-form">
        <form action="/new-record">
          <button className="back-button" type="submit">Add new record</button>
        </form>
      </div>
      {posts.map((post) => (
        <ListItem
          key={post.id}
          id={post.id}
          title={post.title}
          // body={post.body}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export default ListPage;
