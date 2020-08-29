import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import { registerNav } from "./modules/Navigation";
import { insertToken } from "./redux/action/tokenAction";
import DashboardContainer from "./components/pages/dashboard/DashboardContainer";

class App extends Component {
  componentDidMount() {
    this.props.insertToken();
  }
  render() {
    return (
      <div>
        <Router ref={registerNav}>
          <Switch>
            <Route
              key="dashboard"
              path="/dashboard"
              component={DashboardContainer}
            />
            ,
            <Route exact path="/" component={DashboardContainer} />
            <Redirect to="/login" />
          </Switch>
        </Router>
      </div>
    );
  }
}
const mapStoreToProps = (state) => ({
  token: state.token.user_token,
});
const mapDispatchToProps = {
  insertToken,
};
export default connect(mapStoreToProps, mapDispatchToProps)(App);
