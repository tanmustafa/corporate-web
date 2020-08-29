import React, { Component } from "react";
import HeaderContainer from "../../header/headerContainer";
import styles from "./stylesheets/dashboard.module.sass";

export default class Dashboard extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.outbox}>
        <HeaderContainer />
      </div>
    );
  }
}
