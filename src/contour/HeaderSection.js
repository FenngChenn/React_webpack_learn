import React, { Component } from 'react';

class HeaderSection extends Component {
  render() {
    return(
      <header className="nav-header">
        <HeadImage />
        <ul className="nav-blog">
          <li><a href="#">Docs</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Download</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </header>
    );
  }
}

class HeadImage extends Component {
  render() {
    return(
      <img src="img/head.jpg" className="head-animate" />
    );
  }
}

module.exports = HeaderSection;
