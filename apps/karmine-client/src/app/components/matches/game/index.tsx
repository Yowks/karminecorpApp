import Games from "../../../models/enums/games";
import useStyles from "./styles";
import counterstrike from "../../../public/counterstrike.svg"
import dota2 from "../../../public/dota2.svg"
import lol from "../../../public/lol.svg"
import valorant from "../../../public/valorant.svg"

export const Game: React.FC<{game: string}> = ({game}) => {
  const {classes} = useStyles()
  let gameName= '';
  const renderSwitch = (game: string) => {
    switch(game) {
      case Games.COUNTERSTRIKE:
        gameName = 'Counter Strike'
        return <img src={counterstrike} alt="counterstrike Logo" className={classes.gameLogo} style={{color:"#FFF"}}/>;
      case Games.DOTA2:
        gameName = 'Dota 2'
        return <img src={dota2} alt="dota2 Logo" className={classes.gameLogo}/>;
      case Games.LOL:
        gameName = 'League Of Legends'
        return <img src={lol} alt="lol Logo" className={classes.gameLogo}/>;   
      case Games.VALORANT:
        gameName = 'Valorant'
        return <img src={valorant} alt="Valorant Logo" className={classes.gameLogo}/>;
      default:
        return '';
    }
  }

	return (
    <div className={classes.gameBar}>
      <div className={classes.container}>
        <div className={classes.gameInfo}>
          {renderSwitch(game)}
          <span className={classes.gameName}>{gameName}</span>
        </div>
      </div>
    </div>  
  )
}