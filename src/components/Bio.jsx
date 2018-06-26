import React, { Component } from "react";
import { Box, Container } from "gestalt";
import FontAwesome from "react-fontawesome";

export default class Bio extends Component {
  render() {
    return (
      <Box>
        <h3>
          Hello! I'm Josh Gachnang, a{" "}
          <span className="primary">software developer</span> living in Chicago,
          currently working for Triggr Health.
        </h3>
        <p>
          <a href="https://github.com/pcsforeducation">
            <FontAwesome name="github-square" size="2x" />
          </a>
          <a href="https://github.com/joshgachnang">
            <FontAwesome name="twitter-square" size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/joshgachnang/">
            <FontAwesome name="linkedin-square" size="2x" />
          </a>
          <a href="mailto:josh@nang.io">
            <FontAwesome name="envelope-square" size="2x" />
          </a>
        </p>
      </Box>
    );
  }
}
