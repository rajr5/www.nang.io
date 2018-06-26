import React, { Component } from "react";
import { Box, Text } from "gestalt";

export default class TopBar extends Component {
  renderExperience(exp) {
    return (
      <Box key={exp.title}>
        <Text size="xl">{exp.title}</Text>
        {/* todo underline */}
        <Text size="md" italic={true}>
          {exp.subtitle}
        </Text>
        <Text>{exp.body}</Text>
      </Box>
    );
  }

  render() {
    if (!this.props.resume) {
      return null;
    }
    return (
      <Box>{this.props.resume.map(exp => this.renderExperience(exp))}</Box>
    );
  }
}
