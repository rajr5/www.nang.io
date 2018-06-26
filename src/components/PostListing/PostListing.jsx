import React from "react";
import Link from "gatsby-link";
import { Box, Card, Image, Text } from "gestalt";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
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
      <Box padding={4}>
        {postList.map(post => <PostCard key={post.title} post={post} />)}
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
    let post = this.props.post;
    console.log("POST", post);
    return (
      <Box maxWidth={476} padding={4} color="lightGray" shape="rounded">
        <Image
          alt={`Cover image for ${post.title}`}
          src={post.cover}
          naturalWidth={440}
          naturalHeight={116}
        />
        <Text align="center" bold size="xl">
          <a href={post.path}>
            <Box paddingX={3} paddingY={2}>
              {post.title}
            </Box>
          </a>
        </Text>
        <Text>{post.excerpt}</Text>
        {/* </Card> */}
      </Box>
    );
  }
}

export default PostListing;
