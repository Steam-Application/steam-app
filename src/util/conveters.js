export const timestampToDate = (timeStamp) => {
  const ts = new Date(0);

  ts.setUTCSeconds(timeStamp);

  const date = ts.toDateString();

  return date;
};

export const minToHourMin = (val) => {
  const hours = Math.floor(val / 60);
  const minutes = val % 60;
  
  if (hours) {
    return `${hours}hrs ${minutes}m` 
  } else {
    return `${minutes}m`
  }
}