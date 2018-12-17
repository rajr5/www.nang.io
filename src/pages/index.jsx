import { Box, Container } from "gestalt";
import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Bio from "../components/Bio";
import PostListing from "../components/PostListing/PostListing";
import Resume from "../components/Resume";
import SEO from "../components/SEO/SEO";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Container>
        <Box paddingX={4}>
          <Helmet title={config.siteTitle} />
          <SEO postEdges={postEdges} />
          <Bio />
          <Resume resume={config.resume} />
          <PostListing postEdges={postEdges} />
        </Box>
      </Container>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
