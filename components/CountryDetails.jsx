import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container } from '@/styles/UtilityStyles';
import BackButton from '@/components/BackButton';

export default function CountryDetails({ data }) {
  return (
    <DetailsContainer>
      <BackButton />
      <StyledCountryDetails>Country Details - {data.name}</StyledCountryDetails>
    </DetailsContainer>
  );
}
CountryDetails.propTypes = {
  data: PropTypes.object.isRequired
};

const StyledCountryDetails = styled.div`
  margin: 4rem 0;
`;

const DetailsContainer = styled(Container)`
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
