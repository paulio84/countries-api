import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container } from '@/styles/UtilityStyles';
import { mapSVGToImage } from '@/lib/helpers';

import BackButton from '@/components/BackButton';
import CountryDetails from '@/components/CountryDetails';

export default function CountryPage({ data }) {
  const { flag, name } = data;

  return (
    <CountryPageContainer>
      <BackButton />
      <StyledCountryPage>
        <img className="country-flag" src={mapSVGToImage(flag)} alt={`${name} flag`} />
        <CountryDetails data={data} />
      </StyledCountryPage>
    </CountryPageContainer>
  );
}
CountryPage.propTypes = {
  data: PropTypes.object.isRequired
};

const StyledCountryPage = styled.div`
  display: grid;
  column-gap: 4rem;
  font-family: 'NunitoSansLight';
  margin: 6rem 0;

  .country-flag {
    box-shadow: var(--box-shadow);
  }

  @media screen and (min-width: 768px) {
    .country-flag {
      width: initial;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(12, minmax(35px, 35px));

    .country-flag {
      grid-row-start: 1;
      grid-row-end: 13;
      height: 100%;
      width: 100%;
    }
  }

  @media screen and (min-width: 1366px) {
    column-gap: 10rem;
  }
`;

const CountryPageContainer = styled(Container)`
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
