import Link from 'next/link';
import PropTypes from 'prop-types';

import CountryCard from './CountryCard';

import { mapSVGToImage } from '../lib/helpers';

export default function CountryList({ countries }) {
  return (
    countries &&
    countries.map((country) => {
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
    })
  );
}
CountryList.propTypes = {
  countries: PropTypes.array.isRequired
};
