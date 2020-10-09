import styled from 'styled-components';
import { Search } from 'react-feather';

export default function FilterSearchBox() {
  return (
    <>
      <SearchBox>
        <Search />
        <input type="text" placeholder="Search for a country..." />
      </SearchBox>
    </>
  );
}

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
