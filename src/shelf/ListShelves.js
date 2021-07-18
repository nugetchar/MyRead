import React from 'react';
import Shelf from './Shelf';
import PropTypes from 'prop-types';
import { CURRENTLY_READING, READ, WANT_TO_READ } from './shelves-types';

export default function ListShelves(props) {

    const { books, onMoveBook } = props;
    const shelves = [
        { id: CURRENTLY_READING, title: 'Currently Reading', books: books.filter(b => b.shelf === CURRENTLY_READING)},
        { id: WANT_TO_READ, title: 'Want To Read', books: books.filter(b => b.shelf === WANT_TO_READ) },
        { id: READ, title: 'Read', books: books.filter(b => b.shelf === READ) },];

    return (    
        <div className="list-books-content">
            <div>
                {shelves.map((shelf) => (
                    <Shelf key={shelf.id} shelf={shelf} onMoveBook={onMoveBook} />
                ))}
            </div>
        </div>
    )

}

ListShelves.propTypes = {
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
}