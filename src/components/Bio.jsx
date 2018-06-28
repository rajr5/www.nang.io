import React, { Component } from "react";
import { Box, Container } from "gestalt";

export default class Bio extends Component {
  render() {
    return (
      <Box display="flex" direction="column">
        <h3>
          Hello! I'm Josh Gachnang, a{" "}
          <span className="primary">software developer</span> living in Chicago,
          currently working for Triggr Health.
        </h3>

        <Box
          alignSelf="center"
          alignContent="center"
          direction="row"
          display="flex"
          justifyContent="between"
          width="300px"
        >
          <a
            className="connect-icon primary"
            href="https://github.com/pcsforeducation"
          >
            <i className="fab fa-github-square" size="2x" />
          </a>
          <a
            className="connect-icon primary"
            href="https://github.com/joshgachnang"
          >
            <i className="fab fa-twitter-square" size="2x" />
          </a>
          <a
            className="connect-icon primary"
            href="https://www.linkedin.com/in/joshgachnang/"
          >
            <i className="fab fa-linkedin" size="2x" />
          </a>
          <a className="connect-icon primary" href="mailto:josh@nang.io">
            <i className="fas fa-envelope-square" size="2x" />
          </a>
        </Box>
      </Box>
    );
  }
}
