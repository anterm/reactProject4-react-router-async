import React, { Component } from 'react'

export default class Books extends Component {
  state = {
    books: ["PHP", "Javascript", "Ruby", "Python"]
  };
  
  render() {
    const books = this.state.books.map((book, i) => {
      return <li key={i}>{book}</li>
    })
    
    return <div className="books">
      <span>Список книг: </span>
      <ul>{books}</ul>
    </div>
  }
}