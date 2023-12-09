// export function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
const backgroundColor = [
  '#FED057',
  '#00AD84',
  '#81E1FF',
  '#C5BAFF',
  '#6E78E8',
  '#FFB627',
  '#24CCA7',
  '#FFD8D0',
  '#FFD8D0',
  '#6D1C77',

  '#FD9498',

  '#4A56E2',
];

export const color = () => {
  return backgroundColor.map(el => el);
};
