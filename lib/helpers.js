// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function mapSVGToImage(svg) {
  return `https://images.weserv.nl/?url=${svg}&w=450&h=390`;
}

// https://gist.github.com/griffinmichl/72aaab6289780494dc85f88bf4528971#file-debounce_correct-js
export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
