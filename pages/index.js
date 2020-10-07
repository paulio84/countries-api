import CountryCard from '../components/CountryCard';
import Layout from '../components/Layout';

import { mapSVGToImage } from '../lib/helpers';

export default function Index() {
  return (
    <Layout>
      <CountryCard
        countryName="Belgium"
        population={11316524}
        region="Europe"
        capital="Brussels"
        flag={mapSVGToImage('https://restcountries.eu/data/bel.svg')}
      />
      <CountryCard
        countryName="Germany"
        population={81922421}
        region="Europe"
        capital="Berlin"
        flag={mapSVGToImage('https://restcountries.eu/data/deu.svg')}
      />
    </Layout>
  );
}
