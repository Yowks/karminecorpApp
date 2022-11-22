import { CircularProgress } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react"
import Events from "../../models/interfaces/events"
import { getEvents } from "../../services/events"
import { Matches } from "../matches"
import { EventDate } from "../matches/date";
import useStyles from "./styles";

export const Layout = () => {
  const {classes} = useStyles()
  const [events, setEvents] = useState<any>()

  const getAllEvents = useCallback(async () => {
    const values = await getEvents();
    setEvents(values);
  }, [])

	useEffect(() => {
    getAllEvents()
    console.log(events)
  }, [])
  
  return (
    <div className={classes.container} style={{color: "white"}}>
      {events ? Object.keys(events).sort().map((value) => {
        return (
          <>
            <EventDate key={value} date={value} />
            <Matches key={'match'+ value} events={events[value]}/>
          </>
        )
      }): <CircularProgress style={{"margin": "30vh auto 0"}} />}
    </div>
  )
}