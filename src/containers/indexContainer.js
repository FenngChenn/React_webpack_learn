import React, {Component} from 'react';
import { HeaderSection } from './../contour/HeaderSection.js';
import { ContentSection } from './../contour/ContentSection.js';

class IndexContainer extends Component {
  render() {
    return(
      <article className="index-wrapper">
        <HeaderSection />
        <ContentSection />
      </article>
    );
  }
}
