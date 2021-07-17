import React from 'react';

export default function BookMove(props) {
    const { defaultShelf, onMoveBook } = props;
    return (
        <div className="book-shelf-changer">
            <select onChange={(e) => {onMoveBook(e.target.value)}} value={defaultShelf || 'move'}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}