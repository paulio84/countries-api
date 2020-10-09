import { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CountryCard from '@/components/CountryCard';
import FilterContainer from '@/components/FilterContainer';

import { mapSVGToImage } from '@/lib/helpers';

export default function CountryList({ countries }) {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  return (
    <>
      <FilterContainer countries={countries} filterCountries={setFilteredCountries} />
      <StyledCountryList>
        {filteredCountries &&
          filteredCountries.map((country) => {
            const { alpha3Code, name, population, region, capital, flag } = country;

            return (
              <Link key={alpha3Code} href={`country/${alpha3Code}`}>
                <a>
                  <CountryCard
                    countryName={name}
                    population={population}
                    region={region}
                    capital={capital}
                    flag={mapSVGToImage(flag)}
                  />
                </a>
              </Link>
            );
          })}
      </StyledCountryList>
    </>
  );
}
CountryList.propTypes = {
  countries: PropTypes.array.isRequired
};

const StyledCountryList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(279px, 1fr));
  column-gap: 6em;
  justify-items: center;
  margin: 4rem 0;
  row-gap: 4em;

  @media screen and (min-width: 1024px) {
    column-gap: 2em;
  }
  @media screen and (min-width: 1366px) {
    column-gap: 3em;
  }
  @media screen and (min-width: 1440px) {
    column-gap: 4em;
  }
`;
