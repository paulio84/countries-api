import PropTypes from 'prop-types';
import styled from 'styled-components';

import { numberWithCommas } from '@/lib/helpers';

import Detail from '@/components/Detail';
import LinkButton from '@/components/LinkButton';

export default function CountryDetails({ data }) {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
  } = data;

  return (
    <StyledCountryDetails>
      <h1>{name}</h1>
      <DetailContainer>
        <Detail label="Native Name: " data={nativeName} />
        <Detail label="Population: " data={numberWithCommas(population)} />
        <Detail label="Region: " data={region} />
        <Detail label="Sub Region: " data={subregion} />
        <Detail label="Capital: " data={capital} />
        <Detail label="Top Level Domain: " data={topLevelDomain} />
        <Detail label="Currencies: " data={currencies} />
        <Detail label="Languages: " data={languages} />
      </DetailContainer>
      {borders.length > 0 && (
        <>
          <h2>Border Countries: </h2>
          <LinkButtonContainer>
            {borders.map((border) => (
              <LinkButton key={border.code} href={`${border.code}`}>
                {border.name}
              </LinkButton>
            ))}
          </LinkButtonContainer>
        </>
      )}
    </StyledCountryDetails>
  );
}
CountryDetails.propTypes = {
  data: PropTypes.object.isRequired
};

const StyledCountryDetails = styled.div`
  h1 {
    font-size: 1.5em;
    margin-top: 6rem;
  }
  h2 {
    font-size: 1.125em;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  > * {
    margin-top: 1rem;
  }

  > :nth-child(5) {
    margin-bottom: 5rem;
  }
`;

const LinkButtonContainer = styled.div`
  // https://coryrylan.com/blog/css-gap-space-with-flexbox
  --gap: 1rem;
  display: inline-flex;
  flex-wrap: wrap;
  margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
  width: calc(100% + var(--gap));

  > * {
    margin: var(--gap) 0 0 var(--gap);
  }
`;
