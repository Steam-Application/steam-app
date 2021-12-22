export const compareObjects = (objA, objB) => {
  const strA = JSON.stringify(objA);
  const strB = JSON.stringify(objB);

  return strA === strB;
};