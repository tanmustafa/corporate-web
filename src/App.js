import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/pages/admin/Login";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
  function getPage() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/admin">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
      <Footer />
    </div>
  );
}

export default App;
