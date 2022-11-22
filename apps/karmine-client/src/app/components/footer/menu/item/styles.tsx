import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    circle: {
      width: "6vh",
      height: "6vh",
      lineHeight: "6vh",
      background: "#FFF",
      borderRadius: "50px",
      margin: "1vh 4vw",
      color: theme.palette.background.default,
      display: 'flex',
      flex: "0 0 auto",
      flexDirection: 'row',
    },
    circleActive: {
      background: theme.palette.primary.main,
      color: "#FFF"
    },
    imageCenter: {
      margin: "auto"
    }
  };
});
export default useStyles;