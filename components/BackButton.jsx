import { useRouter } from 'next/router';
import { ArrowLeft } from 'react-feather';
import styled from 'styled-components';

import Button from '@/components/Button';

export default function BackButton() {
  const router = useRouter();

  return (
    <StyledBackButton iconLeft={ArrowLeft} clickHandler={router.back}>
      Back
    </StyledBackButton>
  );
}

const StyledBackButton = styled(Button)`
  margin-top: 4rem;
`;
