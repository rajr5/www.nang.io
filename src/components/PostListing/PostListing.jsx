import { Box, Image, Text } from "gestalt";
import React from "react";
import LazyLoad from "react-lazyload";
import { Heading, Paragraph } from "../../Lib";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      if (!postEdge.node.frontmatter.date) {
        return;
      }
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <Box>
        <Box marginTop={6} marginBottom={6}>
          <Heading>Blog</Heading>
        </Box>

        <Box paddingY={4} display="flex" direction="column">
          {postList.map(post => (
            <PostCard key={post.title} post={post} />
          ))}
        </Box>
      </Box>
    );
  }
}

class PostCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
    this.handleMouseEnter = this._handleMouseEnter.bind(this);
    this.handleMouseLeave = this._handleMouseLeave.bind(this);
  }
  _handleMouseEnter() {
    this.setState(() => ({ hovered: true }));
  }
  _handleMouseLeave() {
    this.setState(() => ({ hovered: false }));
  }

  render() {
    const { post } = this.props;
    return (
      <div
        style={{
          maxWidth: "600px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "20px"
        }}
        className="post-item"
      >
        <LazyLoad height={400} offset={300}>
          <Image
            alt={`Cover image for ${post.title}`}
            src={post.cover}
            naturalWidth={600}
            naturalHeight={400}
          />
        </LazyLoad>
        <Box padding={4}>
          <Text align="center" bold size="xl">
            <a href={post.path}>
              <Box paddingX={3} paddingY={2}>
                {post.title}
              </Box>
            </a>
          </Text>
          <Paragraph>{post.excerpt}</Paragraph>
        </Box>
      </div>
    );
  }
}

export default PostListing;
