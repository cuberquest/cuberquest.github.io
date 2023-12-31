export default function format(n) {
  let x = Number(n);
  if (x < 1e3) {
    return x;
  } else if (x >= 1e3 && x < 1e6) {
    return Math.floor(x / 1e3 * 10) / 10 + "k";
  } else if (x >= 1e6 && x < 1e9) {
    return Math.floor(x / 1e6 * 10) / 10 + "m";
  } else if (x >= 1e9 && x < 1e12) {
    return Math.floor(x / 1e9 * 10) / 10 + "b";
  } else if (x >= 1e12 && x < 1e15) {
    return Math.floor(x / 1e12 * 10) / 10 + "t";
  } else if (x >= 1e15) {
    return Math.floor(x / 1e15 * 10) / 10 + "q";
  }
}