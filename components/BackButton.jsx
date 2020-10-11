import { useRouter } from 'next/router';
import { ArrowLeft } from 'react-feather';
import styled from 'styled-components';

export default function BackButton({ isSmall }) {
  const router = useRouter();

  return (
    <>
      <StyledButton isSmall={isSmall} onClick={() => router.back()}>
        <ArrowLeft className="icon" />
        <span>Back</span>
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  align-items: center;
  background-color: var(--elements);
  border-radius: 4px;
  border-width: 0;
  box-shadow: var(--box-shadow);
  color: var(--color);
  cursor: pointer;
  display: flex;
  font-family: 'NunitoSansLight';
  margin-top: ${({ isSmall }) => (isSmall ? '0' : '4rem')};
  outline: none;
  padding: ${({ isSmall }) => (isSmall ? '0.25em 1em' : '0.5em 1.75em')};

  &:hover {
    box-shadow: var(--dark-box-shadow);
  }

  .icon {
    margin-right: 1.5rem;
    width: 1em;
  }
`;
