import React from 'react';
import BookList from '../books/BookList';
import PropTypes from 'prop-types';

export default function Shelf(props) {
    const { shelf: {title, books}, onMoveBook } = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <BookList books={books} onMoveBook={onMoveBook} />
            </div>
        </div>
    )
}

Shelf.propTypes = {
    shelf: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    }).isRequired
}