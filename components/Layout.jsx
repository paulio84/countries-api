import Header from '@/components/Header';

import { Container } from '@/styles/UtilityStyles';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container as="main">{children}</Container>
    </>
  );
}
