import * as dateFns from 'date-fns'
import fr from 'date-fns/locale/fr'
import useStyles from './styles';

function isToday(date: Date):boolean {
  const today = new Date();
  return date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
}

export const EventDate: React.FC<{date: string}> = ({date}) => {
  const { classes } = useStyles();
  const dateSplited = date.split('/');
  const dateObject = new Date(~~dateSplited[2], ~~dateSplited[1]-1, ~~dateSplited[0]);
  return (
    <div className={classes.container}>
      <span className={classes.date}>
        {isToday(dateObject)? `Aujourd'hui ${dateFns.format(dateObject, 'dd.MM.yyyy')}`: dateFns.format(dateObject, 'EEEE dd.MM.yyyy',{
          locale: fr
        })}
      </span>
    </div>   
  )
}