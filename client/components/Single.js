import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    // ES6 destructuring since only 1 thing in the JSON
    // normally it would be `const postId = this.props.params.postId;`
    const { postId } = this.props.params;

    const index = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[index];

    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
});

export default Single;
