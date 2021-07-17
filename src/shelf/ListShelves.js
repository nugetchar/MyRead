import React from 'react';
import Shelf from './Shelf';

export default function ListShelves(props) {

    const { books, onMoveBook } = props;
    const shelves = [
        { id: 'currentlyReading', title: 'Currently Reading', books: books.filter(b => b.shelf === 'currentlyReading')},
        { id: 'wantToRead', title: 'Want To Read', books: books.filter(b => b.shelf === 'wantToRead') },
        { id: 'read', title: 'Read', books: books.filter(b => b.shelf === 'read') },];

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