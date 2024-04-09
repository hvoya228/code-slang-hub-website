import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

function DataTable() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('/api/Term/Get')
            .then(response => response.json())
            .then(response => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const filteredData = data.filter(item => item.text.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <table className="table-terminal">
                <thead>
                    <tr>
                        <th><span style={{ color: '#297373' }}>/</span>term<span style={{ color: '#297373' }}>/</span></th>
                        <th><span style={{ color: '#297373' }}>/</span>explanation<span style={{ color: '#297373' }}>/</span></th>
                        <th><span style={{ color: '#297373' }}>/</span>category<span style={{ color: '#297373' }}>/</span></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.text}</td>
                            <td>{item.explanation}</td>
                            <td>{item.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;