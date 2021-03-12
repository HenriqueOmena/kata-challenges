export const min = (list: number[]): number => {
  return list.reduce((next, prev) => (next <= prev ? next : prev));
};

export const max = (list: number[]): number => {
  return list.reduce((next, prev) => (next >= prev ? next : prev));
};
