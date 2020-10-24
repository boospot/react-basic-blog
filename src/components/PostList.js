import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPosts} from "../actions";

class PostList extends Component {

    posts = [];

    componentDidMount() {

        this.posts = this.props.fetchPosts();

    }

    renderPosts() {

        console.log(this.posts)
        this.posts.map(post => {
            return <div>{post.title}</div>
        })

    }

    render() {
        return (
            <div>
                <h3>{this.renderPosts()}</h3>
            </div>
        );
    }
}

export default connect(null, {fetchPosts})(PostList);