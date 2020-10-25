import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <div className={"item"} key={post.id}>
          <i className={"large middle aligned icon user"} />
          <div className="content">
            <div className="description">
              <h3>{post.title.rendered}</h3>
              {post.excerpt.rendered}
            </div>
            <UserHeader userId={post.author} />
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

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
