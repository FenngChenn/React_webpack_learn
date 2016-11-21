import React, { Component } from 'react';

class HeaderSection extends Component {
  render() {
    return(
      <header class="nav-header">
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
