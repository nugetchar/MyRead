import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { debounce, serie } from '../utils/operators';
import * as BooksAPI from '../BooksAPI';
import BookList from '../books/BookList';
import { NONE } from '../shelf/shelves-types';

export default class SearchBook extends Component {
    static propTypes = {
        shelvedBooks: PropTypes.array.isRequired
    }

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

    computeBookList = () => {
        const {books} = this.state;
        const {shelvedBooks} = this.props;
        return books.map((book) => {
            const b = shelvedBooks.find(({id}) => id === book.id);
            return {...book, shelf: !!b ? b.shelf : NONE}
        });
    }

    render() {
        const { query } = this.state;
        const { onMoveBook } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} onChange={(e) => { this.handleSearch(e.target.value) }} />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookList books={this.computeBookList()} onMoveBook={onMoveBook} />
                </div>
            </div>
        )
    }
}