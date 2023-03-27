import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import SubmissionForm from './Routes/SubmissionForm';
import PutOnLocalStorage from './Data';

// Routing paths
export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="detail" element={<Detail />} />
          <Route path="uploadhackathon" element={<SubmissionForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// Put every predefined data on local storage 
PutOnLocalStorage();

// Selecting root id element
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render index
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
