import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      padding: 'calc(10vh + 4px) 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: "0 auto"
    }
  };
});
export default useStyles;