import React, { Component } from 'react'

class BookListContainer extends Component{
  render(){
    return(
      <div id="bookList" className="book-list">
        <ul>
          <li>你不知道的javascript</li>
          <li>CSS揭秘</li>
          <li>javascript高级编程</li>
          <li>javascript设计模式</li>
        </ul>
      </div>
    );
  }
}

module.exports = BookListContainer;
