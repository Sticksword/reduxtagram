import React from 'react';
import { Link } from 'react-router';
// use cloneElement instead of just { this.props.children } to pass props
const Main = React.createClass({
  render() {
    return (
      <div>
        <h1><Link to="/">Reduxstagram</Link></h1>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
});

export default Main;
