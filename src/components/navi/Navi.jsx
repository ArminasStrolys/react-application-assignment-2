import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import ListPage from '../listPage/ListPage';
// import ListItem from '../listItem/ListItem';
import NewRecordForm from '../newRecordForm/NewRecordForm';
import DetailsPage from '../detailsPage/DetailsPage';

const Navi = () => {

// const [getId, setGetId] = useState()

// const idFromChild = (data) => {
//   setGetId(data)
// }

// <ListItem getData={idFromChild} />;

    return (
        <div>
      <Router>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/new-record" element={<NewRecordForm />} />
          <Route path="/details" element={<DetailsPage />} />
          {/* <Route path="/details" element={<DetailsPage id={getId} />} /> */}
        </Routes>
      </Router>
        </div>
    );
}

export default Navi;
