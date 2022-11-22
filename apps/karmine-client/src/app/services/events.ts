import axios from 'axios';
import * as cheerio from 'cheerio';
import { format } from 'date-fns';
import Events from '../models/interfaces/events';

let actualGame = '';
const objectEvents = Object.create(null);

function formatValues(value: string): string{
  return value.replace(/(\r\n|\n|\r)/gm, "");
}

function searchData($: cheerio.CheerioAPI) {
  const team1 = $('.team-1 .name');
  const team2 = $('.team-2');
  const tournament = $('.event')
  const upcomingMatchesDetails = $('time');

  if(team1.length === 0) {
    return objectEvents;
  }

  for(let i=0; i<team1.length; i++){
    let date = $(upcomingMatchesDetails).attr("datetime");
    
    if(date === undefined){
      date = '2022'
    }

    const dateDayMonthYear = format(new Date(date), 'dd/MM/yyyy');
    
    if(objectEvents[dateDayMonthYear] === undefined) {
      objectEvents[dateDayMonthYear] = []
    }

    if(objectEvents[dateDayMonthYear][actualGame] === undefined) {
      objectEvents[dateDayMonthYear][actualGame] = []
    }

    const event: Events = {
      team: formatValues($(team1[i]).text()),
      game: actualGame,
      date: date,
      opponent: formatValues($(team2[i]).text()),
      tournament: formatValues($(tournament[i]).text()),
    }
    objectEvents[dateDayMonthYear][actualGame].push(event);
    objectEvents[dateDayMonthYear][actualGame].sort(function(a: Events,b: Events){
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    });
  }
  return objectEvents;
}

export const getEvents = async () => {
  const urls = [
    "https://www.gosugamers.net/dota2/teams/3303-anonymous-esports",
    "https://www.gosugamers.net/counterstrike/teams/43672-heet", 
    "https://www.gosugamers.net/lol/teams/32677-kawaii-kiwis"
  ];

  for(const requestURL of urls) {
    const allMatches = await axios.get(`http://localhost:1458/get?url=${encodeURIComponent(requestURL)}`)
    .then(response => {
      if (response.status === 200) return response;
      throw new Error('Network response was not ok.')
    })
    actualGame = requestURL.split('/')[3]

    const html = cheerio.load(allMatches.data.contents);
    await searchData(html);
  };

  return objectEvents;
}