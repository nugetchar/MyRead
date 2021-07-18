import React from 'react'
import { Route } from 'react-router-dom';
import './App.css'
import Library from './books/Library';
import SearchBook from './search/SearchBook';
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
  state = {
    shelvedBooks: []
  };

  async componentDidMount() {
    const shelvedBooks = await BooksAPI.getAll();
    this.setState((state) => ({ ...state, shelvedBooks }));
  }

  /**
   * 
   * @param {string} newShelfId the shelf id to which we are going to move the book 
   * @param {Book} book the book we want to move 
   */
  handleMoveBook = async (newShelfId, book) => {
    await BooksAPI.update(book, newShelfId);
    this.setState((state) => {
      return {
        ...state,
        shelvedBooks: [...state.shelvedBooks.filter(b => b.id !== book.id), { ...book, shelf: newShelfId }]
      }
    });
  }

  render() {
    const {shelvedBooks} = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={() => <Library books={shelvedBooks} onMoveBook={this.handleMoveBook}/>}></Route>
        <Route exact path="/search" render={() => <SearchBook shelvedBooks={shelvedBooks.map(({id, shelf}) => ({id, shelf}))} onMoveBook={this.handleMoveBook}/>}></Route>
      </div>
    )
  }
}

export default BooksApp
