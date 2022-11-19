import axios from 'axios';
import * as cheerio from 'cheerio';
import Events from '../models/interfaces/events';

let actualGame = '';

function formatValues(value: string): string{
  return value.replace(/(\r\n|\n|\r)/gm, "");
}

function searchData($: cheerio.CheerioAPI): Events[] {
  const team1 = $('.team-1 .name');
  const team2 = $('.team-2');
  const tournament = $('.event')
  const upcomingMatchesDetails = $('time');
  const matches: Events[] = [];

  if(team1.length === 0) {
    return matches;
  }

  for(let i=0; i<team1.length; i++){
    let date = $(upcomingMatchesDetails).attr("datetime");
    
    if(date === undefined){
      date = '2022'
    }

    const event: Events = {
      team: formatValues($(team1[i]).text()),
      game: actualGame,
      date: date,
      opponent: formatValues($(team2[i]).text()),
      tournament: formatValues($(tournament[i]).text()),
    }
    matches.push(event)
  }
  return matches;
}

export const getEvents = async () => {
  const urls = ["https://www.gosugamers.net/dota2/teams/3303-anonymous-esports","https://www.gosugamers.net/counterstrike/teams/43672-heet"];
  const data : Events[] = [];
  urls.forEach( async (requestURL) => {
    const allMatches = await axios.get(`http://localhost:1458/get?url=${encodeURIComponent(requestURL)}`)
    .then(response => {
      if (response.status === 200) return response;
      throw new Error('Network response was not ok.')
    })
    actualGame = requestURL.split('/')[3]

    const html = cheerio.load(allMatches.data.contents);
    console.log(await searchData(html))
    Array.prototype.push.apply(data,await searchData(html))
  });

  console.log('data', data)
  
  return data;
}