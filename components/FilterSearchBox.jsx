import { useState } from 'react';
import { Search } from 'react-feather';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function FilterSearchBox({ filterCountriesBySearchTerm }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    filterCountriesBySearchTerm(term);
  };

  return (
    <>
      <SearchBox>
        <Search />
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </SearchBox>
    </>
  );
}
FilterSearchBox.propTypes = {
  filterCountriesBySearchTerm: PropTypes.func.isRequired
};

const SearchBox = styled.div`
  align-items: center;
  display: flex;
  position: relative;

  input {
    background-color: var(--Blue);
    border-radius: 8px;
    border-width: 0;
    color: var(--White);
    font-family: 'NunitoSansLight';
    font-size: 0.875em;
    outline: none;
    padding: 1em 0;
    padding-left: 40px;
    width: 100%;

    &::placeholder {
      color: var(--White);
    }
  }

  svg {
    margin: 0 0.5em;
    position: absolute;
  }

  @media screen and (min-width: 1024px) {
    input {
      padding-left: 56px;
    }
    svg {
      margin: 0 1em;
    }
  }
`;
