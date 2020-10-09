import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ChevronDown } from 'react-feather';

export default function FilterDropdown({ onSelectHandler, region, options, defaultOption }) {
  const [displayOptions, setDisplayOptions] = useState(false);

  const handleSelection = (e) => {
    e.stopPropagation();
    onSelectHandler(e.target.textContent);
  };

  return (
    <StyledFilterDropdown>
      <div
        tabIndex="0"
        className="selector"
        onClick={() => setDisplayOptions(!displayOptions)}
        onBlur={() => setDisplayOptions(false)}
      >
        <p>{region}</p>
        <ChevronDown className="icon" />
      </div>
      <div className={`options ${displayOptions ? '' : 'hide'}`}>
        <p className="option" onMouseDown={handleSelection}>
          {defaultOption}
        </p>
        {options &&
          options.map((option) => (
            <p key={option} className="option" onMouseDown={handleSelection}>
              {option}
            </p>
          ))}
      </div>
    </StyledFilterDropdown>
  );
}
FilterDropdown.propTypes = {
  onSelectHandler: PropTypes.func.isRequired,
  region: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  defaultOption: PropTypes.string.isRequired
};

const StyledFilterDropdown = styled.div`
  box-shadow: 0px 0px 0px 8px rgba(17, 21, 23, 0.1);
  margin-top: 4rem;
  position: relative;
  width: 200px;

  @media screen and (min-width: 444px) {
    margin-top: 0;
  }

  p {
    margin: 0;
  }

  .selector,
  .options {
    background-color: var(--Blue);
    border-radius: 8px;
    font-family: 'NunitoSansLight';
    font-size: 0.875em;
  }

  .selector {
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 1em;

    .icon {
      height: 14px;
      width: 14px;
    }
  }

  .options {
    margin-top: 0.5rem;
    padding: 0.5em;
    position: absolute;
    width: 100%;
    z-index: 10;

    .option {
      padding: 0.75rem 0.5rem;

      &:hover {
        background-color: var(--DarkBlue);
        cursor: pointer;
      }
    }
  }

  .hide {
    display: none;
  }
`;
