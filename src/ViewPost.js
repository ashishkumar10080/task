import React, { Component } from 'react';
import Post from './Post';
import {connect} from 'react-redux';

class ViewPost extends Component {
  render() {
    return (
    <div>
      <h1>View Task</h1>
      {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
    );
   }
}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(ViewPost);