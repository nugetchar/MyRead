import React from 'react';
import BookMove from './BookMove';

export default function Book(props) {
    const { book: {id, imageLinks, author, title}, onMoveBook } = props;
    return (
        <div className="book">
            <div className="book-top">
                {(!!imageLinks && <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${imageLinks.thumbnail}")` }}></div>)}
                {(!imageLinks && <div className="book-cover" style={{ width: 128, height: 188 }}></div>)}
                
                <BookMove onMoveBook={(newShelfId) => onMoveBook(id, newShelfId)}/>
            </div>
            <div className="book-title">{author}</div>
            <div className="book-authors">{title}</div>
        </div>

    )
}