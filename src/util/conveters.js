export const timestampToDate = (timeStamp) => {
  const ts = new Date(0);

  ts.setUTCSeconds(timeStamp);

  const date = ts.toDateString();

  return date;
};