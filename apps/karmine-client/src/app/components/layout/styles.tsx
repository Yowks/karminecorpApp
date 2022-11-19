import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      paddingTop: 'calc(10vh + 4px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: "0 auto"
    }
  };
});
export default useStyles;