import { useEffect, useMemo, useState } from "react"
import Events from "../../models/interfaces/events"
import { getEvents } from "../../services/events"
import { Matches } from "../matches"
import useStyles from "./styles";

export const Layout = () => {
  const {classes} = useStyles()
  const [events, setEvents] = useState<Events[]>([])

	useEffect(() => {
    const fetchData = async () => {
      setEvents(await getEvents());
    }
    fetchData()
  }, [])
  
  return (
    <div className={classes.container} style={{color: "white"}}>
      {events.length>0 && events.map((value, index) => {
        return <Matches {...value}/>
      })}
    </div>
  )
}