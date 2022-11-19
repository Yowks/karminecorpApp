import Events from "../../models/interfaces/events"
import { EventDate } from "./date"
import { Event } from "./event"
import { Game } from "./game"
import { useStyles } from "./styles"

export const Matches = (event: Events) => {
  const classes = useStyles()
	return (
    <div>
      <EventDate date={event.date} />
      <Game {...event}/>
      <Event team1={event.team} opponent={event.opponent} date={event.date}/>
    </div>
  )
}