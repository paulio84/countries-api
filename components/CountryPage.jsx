import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container } from '@/styles/UtilityStyles';

import BackButton from '@/components/BackButton';
import CountryDetails from '@/components/CountryDetails';

export default function CountryPage({ data }) {
  const { flag, name } = data;

  return (
    <CountryPageContainer>
      <BackButton />
      <StyledCountryPage>
        <img className="country-flag" src={flag} alt={`${name} flag`} />
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

  @media screen and (min-width: 768px) {
    grid-template-columns: 50% 50%;
  }
`;

const CountryPageContainer = styled(Container)`
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
