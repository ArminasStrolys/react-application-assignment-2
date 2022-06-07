import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import ListPage from '../listPage/ListPage';
import NewRecordForm from '../newRecordForm/NewRecordForm';
import DetailsPage from '../detailsPage/DetailsPage';

const Navi = () => {
    return (
        <div>
            <ul className="nav-items">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/list-page">List page</a>
        </li>
      </ul>

      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list-page" element={<ListPage />} />
          <Route path="/new-record" element={<NewRecordForm />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </Router>
        </div>
    );
}

export default Navi;
