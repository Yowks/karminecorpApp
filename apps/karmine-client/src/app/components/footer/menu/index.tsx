import { useContext } from "react";
import { Navigation } from "../../../hooks/navigation";
import Pages from "../../../interfaces/pages";
import { MenuItem } from "./item";

export const Menu: React.FC = () => {
  const {actualPage, setActualPage} = useContext(Navigation);
	return (
    <Navigation.Provider value={{actualPage:actualPage, setActualPage: setActualPage}}>
      {(Object.keys(Pages) as Array<keyof typeof Pages>).map((key) => {
        return <MenuItem key={key} page={Pages[key]}/>
      })}
    </Navigation.Provider>
  )
}