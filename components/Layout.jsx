import styled from 'styled-components';

import Header from '../components/Header';

import { Container } from '../styles/UtilityStyles';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain as="main">{children}</StyledMain>
    </>
  );
}

const StyledMain = styled(Container)`
  margin-top: 3rem;
  padding: 0 3em;
`;
