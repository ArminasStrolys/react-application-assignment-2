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
  };
  const handleUnique = () => {
    filter.unique === true
      ? setFilter({ ...filter, unique: false })
      : setFilter({ ...filter, unique: true });
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  const uniqueArray = posts.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.userId === value.userId)
  );
  console.log(uniqueArray);

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

      {filter.unique === false
        ? posts.map(
            (post) => (
              filter.ascending === true
                ? posts.sort((a, b) => a.title.localeCompare(b.title))
                : posts.sort((a, b) => b.title.localeCompare(a.title)),
              (
                <ListItem
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  userId={post.userId}
                />
              )
            )
          )
        : uniqueArray.map((post) => (
          filter.ascending === true
                ? posts.sort((a, b) => a.title.localeCompare(b.title))
                : posts.sort((a, b) => b.title.localeCompare(a.title)),
            <ListItem
              key={post.id}
              id={post.id}
              title={post.title}
              userId={post.userId}
            />
          ))}
    </div>
  );
};

export default ListPage;
