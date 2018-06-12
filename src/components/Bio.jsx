import React, { Component } from "react";
import { Box, Container } from "gestalt";

export default class Bio extends Component {
  render() {
    return (
      <Container>
        <h3>
          Hello! I'm Josh Gachnang, a{" "}
          <span className="primary">software developer</span> living in Chicago,
          currently working for Triggr Health.
        </h3>

        <p>
          <a href="https://github.com/pcsforeducation">GitHub</a>
        </p>
        <p>
          <a href="https://github.com/joshgachnang">Twitter</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/joshgachnang/">LinkedIn</a>
        </p>
        <p>
          <a href="mailto:josh@nang.io">Email</a>
        </p>
      </Container>
    );
  }
}
