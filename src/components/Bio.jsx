import { Box, Button, Text } from "gestalt";
import React, { Component } from "react";
import profilePic from "./profile.jpg";
import { Heading, Paragraph } from "../Lib";

export default class Bio extends Component {
  render() {
    return (
      <Box display="flex" direction="column">
        <Box
          display="flex"
          direction="column"
          mdDirection="row"
          lgDirection="row"
        >
          <img
            style={{
              maxWidth: 200,
              maxHeight: 200,
              borderRadius: 200,
              marginRight: 30,
              alignSelf: "center",
              justifySelf: "center"
            }}
            src={profilePic}
            alt="Josh Gachnang"
          />
          <Box direction="column" alignSelf="center">
            <Box marginBottom={4}>
              <Text leading="tall" size="xl">
                Hello! I'm <span className="primary">Josh Gachnang</span>, a
                freelance software developer living in Los Angeles. If you have
                an idea for an app or website, I can help you bring it to life.{" "}
              </Text>
            </Box>
            <a href="mailto:josh@nang.io">
              <Button
                inline
                color="blue"
                text="Contact me and let's get building!"
                href="mailto:josh@nang.io"
              />
            </a>
          </Box>
        </Box>

        <Box paddingY={4} marginTop={8}>
          <Heading>My Services</Heading>
          <Paragraph leading="tall">
            I excel at quickly building beautiful experiences on iOS, Android,
            and the web. Together, we can flesh out your idea and design the app
            together. From my past work at startups, I've learned how to pick
            out what is important, launch quickly, and validate ideas. That
            means lower cost for you and quicker feedback from your new users.
            I've also built a library of tools to help us get your app off the
            ground more quickly with all the basic functionality built in.
          </Paragraph>
        </Box>
        <Box paddingY={4}>
          <Heading size="xl">About Me</Heading>
          <Paragraph size="lg" leading="tall">
            I've been doing software development since 2010, while I was
            studying Computer Science at the University of Wisconsin - Madison.
            I've worked for startups, large companies, and universities. I've
            built mobile apps, web apps, cloud computing infrastructure, and
            everything in between. I love learning new technologies.
          </Paragraph>
          <Paragraph leading="tall">
            I deeply believe in using software to make the world a better place.
            I enjoy sharing what I've learned through mentoring, blogging, and
            giving talks. I also enjoy working on side projects. Some of my
            favorites are <a href="https://github.com/joshgachnang/val">Val</a>,
            a chatbot that automates parts of my life,
            {/* 
            {" "} <a href="https://avotoast.app">AvoToast</a>, a recipe, cost, and
            nutrition tracking app,
            */}{" "}
            and{" "}
            <a href="https://github.com/joshgachnang/magic-mirror">
              Magic Mirror
            </a>
            , which runs displays and control panels throughout my house.
          </Paragraph>
        </Box>
      </Box>
    );
  }
}
