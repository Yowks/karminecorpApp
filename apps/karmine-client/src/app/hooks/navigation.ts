import { createContext } from "react";
import Pages from "../interfaces/pages";

export const Navigation = createContext({
  actualPage: Pages.HOMEPAGE,
  setActualPage: (page:any) => {},
});