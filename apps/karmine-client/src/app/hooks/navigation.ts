import { createContext } from "react";
import Pages from "../models/enums/pages";

export const Navigation = createContext({
  actualPage: Pages.HOMEPAGE,
  setActualPage: (page:any) => {},
});