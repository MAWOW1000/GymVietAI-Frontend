import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './SearchBar.scss';
import { BiSearch } from 'react-icons/bi';
import { searchExercise } from '../../../../../util/exerciseAxios/exerciseApi';
import debounce from 'lodash/debounce';

const SearchBar = ({ onSearchResults }) => {
    const language = useSelector((state) => state.system.language);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 10;

    const validateSearch = (value) => {
        if (value.length > 50) {
            setError(language ? 'Search term cannot exceed 50 characters' : 'Từ khóa tìm kiếm không được vượt quá 50 ký tự');
            return false;
        }
        if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            setError(language ? 'Special characters are not allowed' : 'Không được sử dụng ký tự đặc biệt');
            return false;
        }
        setError('');
        return true;
    };

    const debouncedSearch = debounce(async (term, page) => {
        if (!validateSearch(term)) return;
        
        if (term.trim()) {
            const result = await searchExercise(term, limit, page);
            if (result.EC === 0) {
                onSearchResults(result);
            } else {
                onSearchResults({
                    EC: 0,
                    DT: {
                        exercises: [],
                        "Total page": 0,
                        "Current page": 1
                    }
                });
            }
        } else {
            onSearchResults(null);
        }
    }, 300);

    useEffect(() => {
        debouncedSearch(searchTerm, currentPage);
        return () => debouncedSearch.cancel();
    }, [searchTerm, currentPage]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        setCurrentPage(1); // Reset về trang 1 khi search term thay đổi
        if (validateSearch(value)) {
            debouncedSearch(value, 1);
        }
    };

    // Function để update page từ component cha
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="search-bar">
            <div className="search-input-container">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder={language ? "Search exercise by name..." : "Tìm kiếm theo tên bài tập..."}
                    className={`search-input ${error ? 'error' : ''}`}
                />
                <BiSearch className="search-icon" />
                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    );
};

export default SearchBar;
