import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BoldText } from '../styles/UtilityStyles';

import { numberWithCommas } from '../lib/helpers';

export default function CountryCard({ countryName, population, region, capital, flag }) {
  return (
    <StyledCountryCard>
      <img className="country-card__flag" src={flag} alt={`${countryName} flag`} />
      <div className="country-card__details">
        <h1 className="country-card__name">{countryName}</h1>
        <p className="country-card__detail-wrapper">
          <BoldText>Population: </BoldText>
          <span className="country-card__value">{numberWithCommas(population)}</span>
        </p>
        <p className="country-card__detail-wrapper">
          <BoldText>Region: </BoldText>
          <span className="country-card__value">{region}</span>
        </p>
        <p className="country-card__detail-wrapper">
          <BoldText>Capital: </BoldText>
          <span className="country-card__value">{capital ? capital : 'N/A'}</span>
        </p>
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
  background-color: var(--Blue);
  border-radius: 10px;
  box-shadow: 0px 0px 0px 8px rgba(17, 21, 23, 0.1);
  font-family: 'NunitoSansLight';
  max-height: 357px;

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
