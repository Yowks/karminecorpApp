import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    headerContainer: {
      background: theme.palette.background.default,
      borderBottom: `4px solid ${theme.palette.primary.main}`,
      height : '10vh',
      width: '100vw',
      position: 'fixed',
      top: 0
    },
    container: {
      maxWidth: '680px',
      margin: "0 auto"
    },
    imageContainer: {
      height: "6vh",
      width: "6vh",
      margin: "0 auto"
    }
  };
});
export default useStyles;