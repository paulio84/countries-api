import NormaliseStyles from '../styles/NormaliseStyles';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NormaliseStyles />
      <Component {...pageProps} />
    </>
  );
}
