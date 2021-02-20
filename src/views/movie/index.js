import React, { Component } from "react";
import { getHotMovie, getHotMovieDetail } from "../../api/index";
import "./index.less";
export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
  }
  componentDidMount() {
    getHotMovie().then((res) => {
      this.setState({
        movieList: res.data,
      });
    });
  }
  getHotMovieDetail(id) {
    console.log(id);
    getHotMovieDetail({ id }).then((res) => {
      console.log(res);
    });
  }
  render() {
    const { movieList } = this.state;
    console.log(movieList);
    return (
      <div className="movie_wrap">
        {movieList.map((item) => {
          return (
            <div
              className="moive_item"
              key={item.movie_id}
              onClick={() => this.getHotMovieDetail(item.movie_id)}
            >
              <div className="corverView">
                <img src={item.picture} alt={item.title} />
              </div>
              <div className="title">
                {item.title} <span className="star">{item.star}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
