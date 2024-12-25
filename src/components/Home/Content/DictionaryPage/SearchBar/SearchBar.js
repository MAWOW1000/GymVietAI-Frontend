import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './SearchBar.scss';
import { BiSearch } from 'react-icons/bi';
import { searchExercise } from '../../../../../util/exerciseAxios/exerciseApi';
import debounce from 'lodash/debounce';

const SearchBar = ({ onSearchResults }) => {
    const language = useSelector((state) => state.system.language);
    const [searchTerm, setSearchTerm] = useState('');

    // Debounce the search function to avoid too many API calls
    const debouncedSearch = debounce(async (term) => {
        if (term.trim()) {
            const result = await searchExercise(term);
            if (result.EC === 0) {
                onSearchResults(result.DT);
            } else {
                onSearchResults([]);
            }
        } else {
            onSearchResults(null); // null indicates to show normal filtered results
        }
    }, 300);

    useEffect(() => {
        debouncedSearch(searchTerm);
        return () => debouncedSearch.cancel();
    }, [searchTerm]);

    return (
        <div className="search-bar">
            <div className="search-input-container">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={language ? "Search exercise by name..." : "Tìm kiếm theo tên bài tập..."}
                    className="search-input"
                />
                <BiSearch className="search-icon" />
            </div>
        </div>
    );
};

export default SearchBar;
