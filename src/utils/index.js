const today = new Date();

const getCurrentYear = today.getFullYear();

const getCurrentMonth = () => {
  const month = today.getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

const getCurrentDate = () => {
  const date = today.getDate();
  return date < 10 ? `0${date}` : date;
};

export { getCurrentYear, getCurrentMonth, getCurrentDate };
