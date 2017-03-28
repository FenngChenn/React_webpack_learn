import React, {Component} from 'react';
import { IntroduceSelf } from './../content/IntroduceSelf.js';
import { BlogSection } from './../content/BlogSection.js';

class ContentSection extends Component {
  componentDidMount(){

  },
  render() {
    return (
      <section className="content-wrapper">
        <IntroduceSelf />
        <BlogSection />
      </section>
    );
  }
}

module.exports = {
  ContentSection
}
