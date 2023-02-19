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

const smallImage = (imagePath, size) => {
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace('media/screenshots', `media/resize/${size}/-/screenshots`)
    : imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`);
  return image;
};

export { getCurrentYear, getCurrentMonth, getCurrentDate, smallImage };
