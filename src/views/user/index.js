import React, { Component } from "react";
import { getHotMovie } from "../../api/index";
export default class User extends React.Component {
  componentDidMount() {
    getHotMovie().then((res) => {
      console.log(res);
    });
  }
  render() {
    return <div>电影</div>;
  }
}
