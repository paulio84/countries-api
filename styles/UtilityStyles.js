import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 1em;
`;

export const FlexContainer = styled(Container)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const BoldText = styled.span`
  font-weight: 700;
`;
