import { getCurrentYear, getCurrentMonth, getCurrentDate } from './utils';

const currentDate = `${getCurrentYear}-${getCurrentMonth()}-${getCurrentDate()}`;
const lastYear = `${getCurrentYear - 1}-${getCurrentMonth()}-${getCurrentDate()}`;
const nextYear = `${getCurrentYear + 1}-${getCurrentMonth()}-${getCurrentDate()}`;

// api key
const apiKey = import.meta.env.VITE_API_KEY;

// Base Url
const baseUrl = `https://api.rawg.io/api/games?key=${apiKey}&`;

const popular_games = `dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = `${baseUrl}${popular_games}`;
export const upcomingGamesURL = `${baseUrl}${upcoming_games}`;
export const newGamesURL = `${baseUrl}${new_games}`;

//GAME DETAILS
export const gameDetailsURL = (game_id) => `https://api.rawg.io/api/games/${game_id}?key=${apiKey}`;
//Game ScreenShots
export const gameScreenshotURL = (game_id) => `https://api.rawg.io/api/games/${game_id}/screenshots?key=${apiKey}`;
