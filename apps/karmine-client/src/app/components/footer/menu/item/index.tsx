import { useContext } from "react";
import EventIcon from '@mui/icons-material/Event';
import FeedIcon from '@mui/icons-material/Feed';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Navigation } from "../../../../hooks/navigation";
import useStyles from "./styles";
import Pages from "../../../../models/enums/pages";

interface Props{
  page: Pages
}

export const MenuItem: React.FC<Props> = ({page}) => {
  const {actualPage, setActualPage} = useContext(Navigation);
  const { classes } = useStyles();

  const renderSwitch = (page: Pages) => {
    switch(page) {
      case Pages.HOMEPAGE:
        return <EventIcon className={classes.imageCenter}/>;
      case Pages.NEWS:
        return <FeedIcon className={classes.imageCenter}/>;
      case Pages.SHOP:
        return <ShoppingCartIcon className={classes.imageCenter}/>;
      default:
        return '';
    }
  }

	return (
    <div className={page !==  actualPage? classes.circle : `${classes.circle} ${classes.circleActive}`} onClick={()=> setActualPage(page)}>
      {
        renderSwitch(page) 
      }
    </div>
  )
}