import React, { Component } from "react";
import { Box, Text } from "gestalt";
import LazyLoad from "react-lazyload";

import { Heading, Paragraph } from "../Lib";

export default class TopBar extends Component {
  renderExperience(exp) {
    return (
      <Box key={exp.title} paddingY={4}>
        <a href={exp.link}>
          <Text bold={true} color="blue" size="lg">
            {exp.title} ({exp.subtitle})
          </Text>
        </a>
        <Box marginTop={4}>
          {exp.image && (
            <LazyLoad height={400} offset={300}>
              <img src={exp.image} alt={exp.title} />
            </LazyLoad>
          )}
        </Box>
        {/* todo underline */}

        <Paragraph>{exp.body}</Paragraph>
        {exp.link && (
          <a href={exp.link}>
            <Text color="blue">Read more..</Text>
          </a>
        )}
      </Box>
    );
  }

  render() {
    if (!this.props.resume) {
      return null;
    }
    return (
      <Box>
        <Box marginTop={4} marginBottom={4}>
          <Heading>Experience</Heading>
        </Box>
        {this.props.resume.map(exp => this.renderExperience(exp))}
      </Box>
    );
  }
}
