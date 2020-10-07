// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function mapSVGToImage(svg) {
  return `https://images.weserv.nl/?url=${svg}&w=450&h=390`;
}
