export const possibleCoordinates = ([x, y]: [number, number]) =>
  [
    [x + 2, y + 1],
    [x + 1, y + 2],
    [x - 1, y + 2],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x - 1, y - 2],
    [x + 1, y - 2],
    [x + 2, y - 1],
  ].filter((e) => 0 < e[0] && e[0] < 9 && 0 < e[1] && e[1] < 9) as [
    number,
    number
  ][];

export const isEqual = <T>(a: Array<T>, b: Array<T>) =>
  JSON.stringify(a) === JSON.stringify(b);
