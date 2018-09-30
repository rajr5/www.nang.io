import React, { Component } from "react";
import { Box, Text } from "gestalt";
import logo from "./josh.png";

export default class TopBar extends Component {
  render() {
    return (
      <Box
        width="100%"
        display="flex"
        direction="row"
        // height="72px"
        smPaddingX={2}
        mdPaddingX={10}
        mdPaddingY={5}
        smPaddingY={1}
      >
        <Box flex="shrink" paddingX={4} paddingY={2}>
          <Text size="xl" bold={true}>
            <a href="/" className="no-link" alt="Josh Gachnang">
              <img
                style={{
                  maxHeight: "60px",
                  marginBottom: 0
                }}
                src={logo}
              />
            </a>
          </Text>
        </Box>
        <Box flex="grow" />

        <Box flex="shrink" paddingX={4} paddingY={2}>
          <Box
            width="160px"
            display="flex"
            direction="row"
            justifyContent="between"
          >
            <a
              className="connect-icon primary"
              href="https://github.com/joshgachnang"
            >
              <i className="fab fa-github-square" />
            </a>
            <a
              className="connect-icon primary"
              href="https://github.com/joshgachnang"
            >
              <i className="fab fa-twitter-square" />
            </a>
            <a
              className="connect-icon primary"
              href="https://www.linkedin.com/in/joshgachnang/"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a className="connect-icon primary" href="mailto:josh@nang.io">
              <i className="fas fa-envelope-square" />
            </a>
          </Box>
        </Box>
      </Box>
    );
  }
}
