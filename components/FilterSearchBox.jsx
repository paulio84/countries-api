import { useState } from 'react';
import { Search } from 'react-feather';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function FilterSearchBox({ onChangeHandler, value }) {
  const [searchTerm, setSearchTerm] = useState(value);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onChangeHandler(term);
  };

  return (
    <>
      <SearchBox>
        <Search />
        <label htmlFor="search">
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={handleInputChange}
            name="search"
          />
        </label>
      </SearchBox>
    </>
  );
}
FilterSearchBox.propTypes = {
  onChangeHandler: PropTypes.func.isRequired
};

const SearchBox = styled.div`
  align-items: center;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  display: flex;
  flex-grow: 1;
  position: relative;

  @media screen and (min-width: 600px) {
    flex-grow: initial;
    min-width: 350px;
  }

  @media screen and (min-width: 768px) {
    min-width: 400px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 500px;
  }

  label {
    width: 100%;
  }

  input {
    background-color: var(--elements);
    border-radius: 8px;
    border-width: 0;
    color: var(--color);
    font-family: 'NunitoSansLight';
    font-size: 0.875em;
    outline: none;
    padding: 1em 0;
    padding-left: 40px;
    width: 100%;

    &::placeholder {
      color: var(--color);
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
