import React, { Component } from "react";
import { getHotMovie } from "../../api/index";
export default class Home extends React.Component {
  componentDidMount() {
    getHotMovie().then((res) => {
      console.log(res);
    });
  }
  render() {
    return <div>控制台</div>;
  }
}
