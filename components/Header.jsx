import Link from 'next/link';
import styled from 'styled-components';

import ThemeToggle from '@/components/ThemeToggle';

import { FlexContainer } from '@/styles/UtilityStyles';

export default function Header() {
  return (
    <StyledHeader>
      <FlexContainer>
        <h1 className="header-link">
          <Link href="/">
            <a>Where in the world?</a>
          </Link>
        </h1>
        <ThemeToggle />
      </FlexContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--elements);
  box-shadow: var(--box-shadow);
  padding: 1em 0em;

  @media screen and (min-width: 1024px) {
    padding: 2em 0em;
  }

  .header-link {
    font-size: 1.125em;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    .header-link {
      font-size: 1.5em;
    }
  }
`;
