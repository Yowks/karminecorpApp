import { useState } from "react";
import { Navigation } from "../../hooks/navigation";
import Pages from "../../interfaces/pages";
import { Menu } from "./menu";
import useStyles from "./styles";

export const Footer: React.FC = () => {
  const [actualPage, setActualPage] = useState(Pages.HOMEPAGE);
  const { classes } = useStyles();
	return (
    <Navigation.Provider value={{actualPage, setActualPage}}>
      <div className={classes.footerContainer}>
        <div className={classes.container}>
          <Menu />
        </div>
      </div>
      </Navigation.Provider>
    )
}