import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { debounce, serie } from '../utils/operators';
import * as BooksAPI from '../BooksAPI';
import BookList from '../books/BookList';

export default class SearchBook extends Component {
    state = {
        query: '',
        books: []
    };

    constructor() {
        super()
        // We create the handleSearch method here in the constructor
        // as the result of the "serie" operator on the handleOnChange method and the debounced searchBooks method
        this.handleSearch = serie(this.handleOnChange, debounce(this.searchBooks))
    }

    /**
     * 
     * @param {string} query the new query 
     */
    handleOnChange = (query) => {
        this.setState((state) => ({ ...state, query }));
    }

    /**
     * 
     * @param {string} term the search term 
     */
    searchBooks = (term) => {
        BooksAPI.search(term)
        .then(books => this.setState((state) => ({ ...state, books: Array.isArray(books) ? books : [] })))
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
                books: state.books.map(b => b.id === book.id ? ({...book, sheld: newShelfId}) : b)
            }
        });
    }

    render() {
        const { query, books } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} onChange={(e) => { this.handleSearch(e.target.value) }} />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookList books={books} onMoveBook={this.handleMoveBook} />
                </div>
            </div>
        )
    }
}