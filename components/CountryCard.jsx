import styled from 'styled-components';
import PropTypes from 'prop-types';

import { numberWithCommas } from '@/lib/helpers';

import Detail from '@/components/Detail';

export default function CountryCard({ countryName, population, region, capital, flag }) {
  return (
    <StyledCountryCard>
      <img className="country-card__flag" src={flag} alt={`${countryName} flag`} />
      <div className="country-card__details">
        <h1 className="country-card__name">{countryName}</h1>
        <Detail
          className="country-card__detail-wrapper"
          label="Population: "
          data={numberWithCommas(population)}
        />
        <Detail
          className="country-card__detail-wrapper"
          label="Region: "
          data={region ? region : 'N/A'}
        />
        <Detail
          className="country-card__detail-wrapper"
          label="Capital: "
          data={capital ? capital : 'N/A'}
        />
      </div>
    </StyledCountryCard>
  );
}
CountryCard.propTypes = {
  countryName: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired
};

const StyledCountryCard = styled.div`
  background-color: var(--elements);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  font-family: 'NunitoSansLight';
  transition: transform 0.2s ease;
  max-height: 357px;

  @media screen and (max-width: 700px) {
    width: 279px;
  }

  :hover {
    transform: scale(1.05);
  }

  .country-card__flag {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 180px;
  }

  .country-card__details {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-size: 0.875em;
    letter-spacing: 1px;
    padding: 1.5em;
  }

  .country-card__name {
    font-size: 1.2em;
    margin-bottom: 2.4rem;
    margin-top: 0;
  }

  .country-card__detail-wrapper {
    margin: 0 0 1rem 0;
  }

  .country-card__detail-wrapper:last-child {
    margin-bottom: 2rem;
  }
`;
