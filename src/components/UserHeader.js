import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  // We dont need it anymore as teh userFetching is alrady donea t the time of fetching posts
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // }

  render() {
    const user = this.props.users.find((user) => {
      return user.id === this.props.userId;
    });

    if (!user) {
      return null;
    }

    return <div className={"header"}>{user.name}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(UserHeader);
