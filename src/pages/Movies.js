import React from "react";
import axios from "axios";
import { Row, Col } from "reactstrap";
import { render } from "sass";
import { isConstructorDeclaration } from "typescript";
// import movies from "./movies.json";
// import "./movies.json";
import "../App.css";

const Grid = (props) => {
  return (
    <span style={{ wordWrap: "break-word" }}>{`${props.key}: ${value}`}</span>
  );
};

const MoviesContext = React.createContext();

class Supplies extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getMovies();
  }

  func = async () => {
    // return Promise.resolve(movies);
    return axios.get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
    );
  };
  getMovies() {
    this.func().then(({ data }) => {
      const { results, page, total_pages, total_results } = data;
      this.setState({
        movies: results,
        pageNumber: page,
        total_pages,
        total_results,
      });
    });
  }

  render() {
    return (
      <MoviesContext.Provider values={{ ...this.state }}>
        {this.props.children}
      </MoviesContext.Provider>
    );
  }
}

function Movies() {
  const grid = (values) => {};

  return (
    <React.Fragment>
      <div className="App">
        <h1>MOVIES</h1>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="/" rel="noopener noreferrer">
            HOME
          </a>
          <a className="App-link" href="/movies" rel="noopener noreferrer">
            MOVIES
          </a>
        </header>
        {/* <Supplies>
          <MoviesContext.Consumer></MoviesContext.Consumer>
        </Supplies> */}
      </div>
    </React.Fragment>
  );
}

export default Movies;
