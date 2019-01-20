import React, { Component } from 'react';
import { navigate } from 'gatsby';

class Index extends Component {
  componentDidMount() {
    navigate(`/what`, { replace: true });
  }
  render() {
    return <div />;
  }
}

export default Index;
