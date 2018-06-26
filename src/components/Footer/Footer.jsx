import React, { Component } from "react";
import Link from "gatsby-link";
import { Box, Container, Text } from "gestalt";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <Container>
          <Box marginTop={12}>
            <Text align="center">{copyright}</Text>
          </Box>
        </Container>
      </footer>
    );
  }
}

export default Footer;
