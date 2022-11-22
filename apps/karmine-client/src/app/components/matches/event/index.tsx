import useStyles from "./styles";
import {utcToZonedTime, format} from 'date-fns-tz' 

export const Event: React.FC<{team1:string, opponent: string, date: string}> = ({team1, opponent, date}) => {
  const {classes} = useStyles()

  const dateObject = new Date(date);
  const timezonedHour = utcToZonedTime(dateObject, 'utc')

	return (
    <div className={classes.container}>
      <span className={classes.time}>
        {format(timezonedHour, "hh:mm")}
      </span>
      <div className={classes.teams}>
        <span className={classes.team}>{team1}</span>
        <span className={classes.team}>{opponent}</span>
      </div>
      <div>twitch kamel</div>
    </div>   
  )
}