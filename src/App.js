import React from 'react'
import { Route } from 'react-router-dom';
import './App.css'
import Library from './books/Library';
import SearchBook from './search/SearchBook';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Library}></Route>
        <Route exact path="/search" component={SearchBook}></Route>
      </div>
    )
  }
}

export default BooksApp
