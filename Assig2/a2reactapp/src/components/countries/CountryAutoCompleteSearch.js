import React, { useState } from 'react';

const CountryAutoCompleteSearch = ({ countries }) => {
    const [searchText, setSearchText] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchText(value);
        if (value) {
            const filtered = countries.filter(country =>
                country.countryName.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCountries(filtered);
        } else {
            setFilteredCountries([]);
        }
    };

    const handleSelectCountry = (countryName) => {
        setSearchText(countryName);
        setFilteredCountries([]);
    };

    return (
        <div className="autocomplete">
            <input
                type="text"
                name="countrySearchText"
                className="form-control"
                placeholder="Search"
                value={searchText}
                onChange={handleInputChange}
            />
            {filteredCountries.length > 0 && (
                <ul className="autocomplete-list">
                    {filteredCountries.map((country) => (
                        <li
                            key={country.countryId}
                            onClick={() => handleSelectCountry(country.countryName)}
                            className="autocomplete-item"
                        >
                            {country.countryName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CountryAutoCompleteSearch;
