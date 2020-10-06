import BaseStyles from '../styles/BaseStyles';
import NormaliseStyles from '../styles/NormaliseStyles';

import '../styles/fontStyles.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NormaliseStyles />
      <BaseStyles />
      <Component {...pageProps} />
    </>
  );
}
