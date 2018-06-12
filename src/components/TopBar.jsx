import React, { Component } from "react";
import { Box, Text } from "gestalt";

export default class TopBar extends Component {
  render() {
    return (
      <Box
        width="100%"
        display="flex"
        direction="row"
        height="60px"
        paddingX={10}
        paddingY={5}
      >
        <Box flex="shrink" paddingX={10} paddingY={2}>
          <Text>
            <span className="site-title">Josh Gachnang</span>
          </Text>
        </Box>
        <Box flex="grow" />
        <Box flex="shrink" paddingX={10} paddingY={2}>
          <Text>Contact</Text>
        </Box>
        <Box flex="shrink" paddingX={10} paddingY={2}>
          <Text>Blog</Text>
        </Box>
      </Box>
    );
  }
}
