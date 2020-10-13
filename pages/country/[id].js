import Head from 'next/head';

import CountryPage from '@/components/CountryPage';
import Layout from '@/components/Layout';

export default function Country({ countryData }) {
  return (
    <>
      <Head>
        <title>React Countries | {countryData.name}</title>
      </Head>
      <Layout>
        <CountryPage data={countryData} />
      </Layout>
    </>
  );
}

// called at build time to define a list of paths to be rendered to HTML at build time
export async function getStaticPaths() {
  // get all countries but just return the 3 letter code
  const response = await fetch('https://restcountries.eu/rest/v2/all?fields=alpha3Code');
  const countries = await response.json();

  // get the paths we want to pre-render
  const paths = countries.map((country) => ({
    params: { id: country.alpha3Code }
  }));

  // pre-render will only happen at build time
  // fallback: false means any other routes will 404
  return { paths, fallback: false };
}

// called at build time to pre-render all the paths specified by getStaticPaths
export async function getStaticProps({ params }) {
  const fields =
    'name;topLevelDomain;alpha3Code;capital;region;subregion;population;borders;currencies;nativeName;languages;flag';

  const response = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${params.id}?fields=${fields}`
  );
  const countryData = await response.json();

  // massage data for currencies and languages - we only need the names
  countryData.currencies = countryData.currencies.reduce((acc, currency, idx) => {
    if (idx === 0) return currency.name;
    if (!currency.name) return acc;

    return `${acc}, ${currency.name}`;
  }, '');
  countryData.languages = countryData.languages.reduce((acc, language, idx) => {
    if (idx === 0) return language.name;
    if (!language.name) return acc;

    return `${acc}, ${language.name}`;
  }, '');

  // border requires more api calls - we need the name for the countries
  countryData.borders = await Promise.all(
    countryData.borders.map(async (border) => {
      const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${border}?fields=name`);
      const countryData = await response.json();

      return { code: border, name: countryData.name };
    })
  );

  return { props: { countryData } };
}
