import Events from "../../models/interfaces/events"
import { Event } from "./event"
import { Game } from "./game"

export const Matches: React.FC<{events: any}> = ({events}) => {
  const eventDatesRendered = Object.keys(events); 
  return (
    <>
      {
        eventDatesRendered.map((value) => {
          return (
            <>
              <Game game={value}/>
              <AllEvents events={events[value]}/>
            </>
          )
        })
      }
    </>
  )
}

export const AllEvents: React.FC<{events: Events[]}> = ({events}) => {
  return (
    <>
    {
      events.map((event : Events) => {
        return <Event team1={event.team} opponent={event.opponent} date={event.date}/>
        })
      }
    </>
  )
}