import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI'
import ListShelves from '../shelf/ListShelves';
import { Link } from 'react-router-dom';

export default class Library extends Component {
    state = {
        books: []
    };

    async componentDidMount() {
        const books = await BooksAPI.getAll();
        this.setState((state) => ({ ...state, books }));
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
                books: [...state.books.filter(b => b.id !== book.id), { ...book, shelf: newShelfId }]
            }
        });
    }

    render() {
        const { books } = this.state;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <ListShelves books={books} onMoveBook={this.handleMoveBook} />
                <div className="open-search">
                    <Link to="/search">
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }
}