import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";

// import React from 'react'
import Layout from "./layout/Layout";
import Register from "./pages/Register.page";
// import Register from "./pages/Register.page";
// import Header from "./Components/Header.components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              {" "}
              <p>Home Page</p>{" "}
            </Layout>
          }
        />
        
        <Route
          path="/register"
          element={
            <Layout>
             <Register/>
            </Layout>
          }
        />
        
      </Routes>
    </Router>
  );
};

export default App;
