import React, { useState } from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function handleSearch() {
    fetch('http://localhost:9292/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchTerm }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Search request failed');
        }
        return response.json();
      })
      .then((data) => {
        setSearchResults(data.results);
      })
      .catch((error) => {
        console.error('Error searching for music:', error);
      });
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;