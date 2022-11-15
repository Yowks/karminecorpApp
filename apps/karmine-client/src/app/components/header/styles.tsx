import { theme } from "apps/karmine-client/src/assets/theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    border: {
      "borderBottom": `4px solid ${theme().primary}`,
      height : '10vh'
    }
  }),
);
export const useStyles = () => {
  return {
    
  }
}