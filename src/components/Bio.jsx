import React, { Component } from "react";
import { Box, Text } from "gestalt";

export default class Bio extends Component {
  render() {
    return (
      <Box display="flex" direction="column">
        <h3>
          Hello! I'm <span className="primary">Josh Gachnang</span>, a software
          developer living in Chicago, currently working for Triggr Health.
        </h3>
        <h4>
          I deeply believe in using software to make the world a better place.
          I'm self-motivated and driven to make an impact. I enjoy sharing what
          I've learned through mentoring, blogging, and giving talks. I also
          enjoy working on side projects. Some of my favorites are{" "}
          <a href="https://github.com/pcsforeducation/val">Val</a>, a chatbot
          that automates parts of my life,{" "}
          <a href="https://avotoast.app">AvoToast</a>, a recipe, cost, and
          nutrition tracking app, and{" "}
          <a href="https://github.com/pcsforeducation/magic-mirror">
            Magic Mirror
          </a>, which runs displays and control panels throughout my house.
        </h4>

        <Box
          alignSelf="center"
          alignContent="center"
          direction="column"
          display="flex"
          width="300px"
        />
      </Box>
    );
  }
}
