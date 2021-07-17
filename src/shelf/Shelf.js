import React from 'react';
import BookList from '../books/BookList';

export default function Shelf(props) {
    const { shelf: {title, books}, onMoveBook } = props;

    /**
     * 
     * @param {string} newShelfId the shelf id to which we are going to move the book 
     * @param {Book} book the book we want to move 
     */
    const handleMoveBook = (newShelfId, book) => {
        onMoveBook(newShelfId, book);
    };

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <BookList books={books} onMoveBook={(newShelfId, book) => handleMoveBook(newShelfId, book)} />
            </div>
        </div>
    )
}