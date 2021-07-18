import React from 'react';
import ListShelves from '../shelf/ListShelves';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Library(props) {

        const { books, onMoveBook } = props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <ListShelves books={books} onMoveBook={onMoveBook} />
                <div className="open-search">
                    <Link to="/search">
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        )
}

Library.propTypes = {
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
}