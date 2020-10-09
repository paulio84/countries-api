import styled from 'styled-components';

import FilterContainer from '@/components/FilterContainer';
import Header from '@/components/Header';

import { Container } from '@/styles/UtilityStyles';

export default function Layout({ children, showSearchFilter }) {
  return (
    <>
      <Header />
      {showSearchFilter && <FilterContainer />}
      <StyledMain as="main">{children}</StyledMain>
    </>
  );
}

const StyledMain = styled(Container)`
  @media screen and (max-width: 767px) {
    padding: 0 3em;
  }
`;
