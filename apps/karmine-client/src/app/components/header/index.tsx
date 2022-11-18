import useStyles from "./styles";
import logo from "../../public/logo.png"

export const Header: React.FC = () => {
  const { classes } = useStyles();
	return (
      <div className={classes.headerContainer}>
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            <img src={logo} alt="karmine Logo" style={{width: '100%', height: "100%", marginTop: "2vh"}}/>
          </div>
        </div>
      </div>
    )
}