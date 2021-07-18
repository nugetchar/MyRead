import React from 'react';
import BookMove from './BookMove';
import PropTypes from 'prop-types';

export default function Book(props) {
    const { book: {id, imageLinks, authors, title, shelf}, onMoveBook } = props;
    return (
        <div className="book">
            <div className="book-top">
                {(!!imageLinks && <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${imageLinks.thumbnail}")` }}></div>)}
                {(!imageLinks && <div className="book-cover" style={{ width: 128, height: 188 }}></div>)}
                
                <BookMove onMoveBook={(newShelfId) => onMoveBook(id, newShelfId)} defaultShelf={shelf}/>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{(authors || []).join(', ')}</div>
        </div>

    )
}

Book.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.string.isRequired,
        imageLinks: PropTypes.object,
        authors: PropTypes.array,
        title: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired
    }).isRequired,
    onMoveBook: PropTypes.func.isRequired
}