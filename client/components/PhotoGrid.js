import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

// for line 11:
// can't actually access key from child element so if we need index, we have to pass it as prop too
const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        { this.props.posts.map((post, index) => <Photo { ...this.props } key={index} index={index} post={post} />) }
      </div>
    )
  }
});

export default PhotoGrid;
