import styled from 'styled-components';
import PropTypes from 'prop-types';

import FilterSearchBox from '@/components/FilterSearchBox';

import { debounce } from '@/lib/helpers';

export default function FilterContainer({ countries, filterCountries }) {
  const filterCountriesBySearchTerm = (filterTerm) => {
    const filteredCountries = countries.filter((country) => {
      return country.name.includes(filterTerm);
    });

    filterCountries(filteredCountries);
  };

  return (
    <>
      <StyledFilterContainer>
        <FilterSearchBox filterCountriesBySearchTerm={debounce(filterCountriesBySearchTerm, 500)} />
      </StyledFilterContainer>
    </>
  );
}
FilterContainer.propTypes = {
  countries: PropTypes.array.isRequired,
  filterCountries: PropTypes.func.isRequired
};

const StyledFilterContainer = styled.div`
  margin-top: 4rem;
`;
