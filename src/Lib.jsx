import { Box, Text } from "gestalt";
import React from "react";

export class Heading extends React.Component {
  render() {
    return (
      <Box paddingY={2}>
        <Text bold={true} color="orange" size="xl">
          <div style={{ fontSize: 28 }}>{this.props.children}</div>
        </Text>
      </Box>
    );
  }
}

export class Paragraph extends React.Component {
  render() {
    return (
      <Box paddingY={2}>
        <Text leading="tall" size="lg">
          {this.props.children}
        </Text>
      </Box>
    );
  }
}
