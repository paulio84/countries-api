import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FilterDropdown from '@/components/FilterDropdown';
import FilterSearchBox from '@/components/FilterSearchBox';

import { debounce } from '@/lib/helpers';

export default function FilterContainer({ countries, filterCountries }) {
  const [filterTerm, setFilterTerm] = useState('');
  const [region, setRegion] = useState('All regions');
  const ALL_REGIONS_LOWER = 'all regions';

  useEffect(() => {
    filterCountriesBySearchTermAndRegion();
  }, [filterTerm, region]);

  const filterCountriesBySearchTermAndRegion = () => {
    const filteredCountries = countries.filter((country) => {
      const countryName = country.name.toLowerCase();
      const countryRegion = country.region.toLowerCase();

      if (region.toLowerCase() === ALL_REGIONS_LOWER) {
        return countryName.includes(filterTerm);
      }
      return countryName.includes(filterTerm) && countryRegion === region.toLowerCase();
    });

    filterCountries(filteredCountries);
  };

  return (
    <>
      <StyledFilterContainer>
        <FilterSearchBox onChangeHandler={debounce(setFilterTerm, 500)} value={filterTerm} />
        <FilterDropdown
          onSelectHandler={setRegion}
          region={region}
          options={['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']}
          defaultOption="All regions"
        />
      </StyledFilterContainer>
    </>
  );
}
FilterContainer.propTypes = {
  countries: PropTypes.array.isRequired,
  filterCountries: PropTypes.func.isRequired
};

const StyledFilterContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 4rem;

  @media screen and (min-width: 600px) {
    justify-content: space-between;
  }
`;
