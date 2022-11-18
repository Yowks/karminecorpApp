import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    footerContainer: {
      borderTop: `4px solid ${theme.palette.primary.main}`,
      height : '10vh',
      width: '100vw',
      position: 'fixed',
      bottom: 0
    },
    container: {
      maxWidth: '680px',
      display: 'flex',
      justifyContent: 'center',
      margin: "0 auto"
    }
  };
});
export default useStyles;