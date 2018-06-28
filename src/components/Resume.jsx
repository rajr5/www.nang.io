import React, { Component } from "react";
import { Box, Text } from "gestalt";

export default class TopBar extends Component {
  renderExperience(exp) {
    return (
      <Box key={exp.title} marginBottom={2}>
        <Text size="lg" bold={true}>
          {exp.title}
        </Text>
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
      <Box>
        <Box marginBottom={3}>
          <Text size="xl" bold={true}>
            <span className="primary">Experience</span>
          </Text>
        </Box>
        {this.props.resume.map(exp => this.renderExperience(exp))}
      </Box>
    );
  }
}
