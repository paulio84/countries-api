import styled from 'styled-components';

import FilterSearchBox from '@/components/FilterSearchBox';

import { Container } from '@/styles/UtilityStyles';

export default function FilterContainer() {
  return (
    <>
      <StyledFilterContainer>
        <FilterSearchBox />
      </StyledFilterContainer>
    </>
  );
}

const StyledFilterContainer = styled(Container)`
  margin-top: 4rem;
`;
