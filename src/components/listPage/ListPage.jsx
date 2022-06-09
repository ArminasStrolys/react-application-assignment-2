import React, { useState, useEffect } from "react";
import ListItem from "../listItem/ListItem";
import Pagination from "../pagination/Pagination";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

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

  return (
    <div>
      <div className="new-form">
        <form action="/new-record">
          <button className="button-style" type="submit">
            Add new record
          </button>
        </form>
        <form onSubmit={(e) => e.preventDefault()}>
          <button
            onClick={handleAscending}
            className={
              filter.ascending === true
                ? "filter-button-1"
                : "filter-button-active-1"
            }
          >
            Filter by: A-Z, Z-A
          </button>
          <button
            onClick={handleUnique}
            className={
              filter.unique === false
                ? "filter-button-2"
                : "filter-button-active-2"
            }
          >
            Filter by: unique users
          </button>
        </form>
      </div>

      {filter.unique === false
        ? currentPosts.map(
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
        : uniqueArray.map(
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
          )}
      {filter.unique === false && (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      )}
    </div>
  );
};

export default ListPage;
