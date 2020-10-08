import CountryList from '@/components/CountryList';
import Layout from '@/components/Layout';

export default function Index({ countries }) {
  return (
    <Layout>
      <CountryList countries={countries} />
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    'https://restcountries.eu/rest/v2/all?fields=alpha3Code;name;population;region;capital;flag'
  );
  const countries = await response.json();

  return {
    props: { countries }
  };
}
