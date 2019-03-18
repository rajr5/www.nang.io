import React, { Component } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  LinkedinShareCount,
  RedditShareCount
} from "react-share";
import config from "../../../data/SiteConfig";
import "./SocialLinks.css";

class SocialLinks extends Component {
  render() {
    const { postNode, postPath } = this.props;
    const post = postNode.frontmatter;
    const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
    const url = config.siteUrl + realPrefix + postPath;

    const filter = count => (count > 0 ? count : "");

    return (
      <div className="social-links primary">
        <RedditShareButton url={url} title={post.title}>
          <i className="fab fa-reddit" />
          <RedditShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </RedditShareCount>
        </RedditShareButton>
        <TwitterShareButton url={url} title={post.title}>
          <i className="fab fa-twitter" />
        </TwitterShareButton>
        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <i className="fab fa-facebook" />
          <FacebookShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </FacebookShareCount>
        </FacebookShareButton>
        <LinkedinShareButton
          url={url}
          title={post.title}
          description={postNode.excerpt}
        >
          <i className="fab fa-linkedin" />{" "}
          <LinkedinShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </LinkedinShareCount>
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <i className="fab fa-telegram" />
        </TelegramShareButton>
      </div>
    );
  }
}

export default SocialLinks;
