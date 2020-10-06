import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
  box-shadow: 0px 5px 10px rgba(17, 21, 23, 0.3);
  padding: 2em 0em;

  .header-link {
    font-size: 1em;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    .header-link {
      font-size: 1.5em;
    }
  }
`;

const Header = () => (
  <>
    <StyledHeader>
      <h1 className="header-link">
        <Link href="/">
          <a>Where in the world?</a>
        </Link>
      </h1>
    </StyledHeader>
  </>
);

export default Header;