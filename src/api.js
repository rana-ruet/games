import { getCurrentYear, getCurrentMonth, getCurrentDate } from './utils';

const currentDate = `${getCurrentYear}-${getCurrentMonth()}-${getCurrentDate()}`;
const lastYear = `${getCurrentYear - 1}-${getCurrentMonth()}-${getCurrentDate()}`;
const nextYear = `${getCurrentYear + 1}-${getCurrentMonth()}-${getCurrentDate()}`;

// api key
const apiKey = import.meta.env.VITE_API_KEY;

// Base Url
const baseUrl = `https://api.rawg.io/api/games?key=${apiKey}&`;

const popular_games = `dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = `${baseUrl}${popular_games}`;
