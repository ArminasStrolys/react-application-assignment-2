import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ListPage from "../listPage/ListPage";
import NewRecordForm from "../newRecordForm/NewRecordForm";
import DetailsPage from "../detailsPage/DetailsPage";

const Navi = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/!#" replace />} />
          <Route path="/!" element={<ListPage />} />
          <Route path="/new-record" element={<NewRecordForm />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navi;
