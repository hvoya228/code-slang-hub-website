import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <input
            type="text"
            placeholder="search by definition..."
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
            className="search-bar"
        />
    );
}

export default SearchBar;