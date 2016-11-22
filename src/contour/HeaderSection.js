import React, { Component } from 'react';

class HeaderSection extends Component {
  render() {
    return(
      <header class="nav-header">
        <HeadImage />
        <ul class="nav-blog">
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
      <img src="img/head.jpg" class="head-animate">
    );
  }
}
