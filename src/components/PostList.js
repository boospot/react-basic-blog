import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <div className={"item"} key={post.id}>
          <i className={"large middle aligned icon user"} />
          <div className="content">
            <div className="description">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={"ui relaxed divided list"}>{this.renderPosts()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
