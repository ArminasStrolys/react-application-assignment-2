import React, { useState, useEffect } from "react";
import ListItem from "../listItem/ListItem";

const ListPage = () => {
  const [filter, setFilter] = useState({
    ascending: true,
    unique: false,
  });

  const handleAscending = () => {
    filter.ascending === true
      ? setFilter({ ...filter, ascending: false })
      : setFilter({ ...filter, ascending: true });
    console.log("works asc");
  };
  const handleUnique = () => {
    filter.unique === true
      ? setFilter({ ...filter, unique: false })
      : setFilter({ ...filter, unique: true });
    console.log("works unique");
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="new-form">
        <form action="/new-record">
          <button className="button-style" type="submit">
            Add new record
          </button>
        </form>
        <form onSubmit={(e) => e.preventDefault()}>
          <button onClick={handleAscending} className="filter-button-1">
            Filter by: A-Z, Z-A
          </button>
          <button onClick={handleUnique} className="filter-button-2">
            Filter by: unique users
          </button>
        </form>
      </div>

      {posts.map(
        (post) => (
          filter.ascending === true
            ? posts.sort((a, b) => a.title.localeCompare(b.title))
            : posts.sort((a, b) => b.title.localeCompare(a.title)),
          (
            <ListItem
              key={post.id}
              id={post.id}
              title={post.title}
              // body={post.body}
              userId={post.userId}
            />
          )
        )
      )}

      {/* {posts.map((post) => (
        <ListItem
          key={post.id}
          id={post.id}
          title={post.title}
          // body={post.body}
          userId={post.userId}
        />
      ))} */}
    </div>
  );
};

export default ListPage;
