import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

export default function BookList(props) {
    const {books, onMoveBook} = props;

    /**
     * 
     * @param {Book} bookId the id of the book we want to move 
     * @param {string} newShelfId the shelf id to which we are going to move the book 
     */
    const handleMoveBook = (bookId, newShelfId) => {
        const book = books.find(b => b.id === bookId);
        if (newShelfId !== book.shelf) {
            onMoveBook(newShelfId, book);
        }
    }
    return (
        <ol className="books-grid">
            {books.map((book) => (<li key={book.id}><Book book={book} onMoveBook={handleMoveBook}/></li>))}
        </ol>
    )
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
}