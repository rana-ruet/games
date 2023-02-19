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

import playstation from '../../public/img/playstation.svg';
import steam from '../../public/img/steam.svg';
import xbox from '../../public/img/xbox.svg';
import nintendo from '../../public/img/nintendo.svg';
import apple from '../../public/img/apple.svg';
import gamepad from '../../public/img/gamepad.svg';

import starEmpty from '../../public/img/star-empty.png';
import starFull from '../../public/img/star-full.png';

const getPlatform = (platform) => {
  switch (platform) {
    case 'PlayStation':
      return playstation;
    case 'Xbox':
      return xbox;
    case 'PC':
      return steam;
    case 'Nintendo':
      return nintendo;
    case 'Apple Macintosh':
      return apple;
    default:
      return gamepad;
  }
};

const getStars = (ratin) => {
  const stars = [];
  const rating = Math.floor(ratin);
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img alt='star' key={i} src={starFull} />);
    } else {
      stars.push(<img alt='star' key={i} src={starEmpty} />);
    }
  }
  return stars;
};

export { getCurrentYear, getCurrentMonth, getCurrentDate, smallImage, getPlatform, getStars };
