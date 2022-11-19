import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      maxWidth: '650px',
      margin: "0 auto",
      display: 'flex',
      gap: "10px 20px",
      justifyContent: 'space-around',
      padding: "5px 15px",
      alignItems: 'center'
    },
    time: {
      color: "#FFFF",
      textTransform: 'capitalize',
      fontWeight: '500',
      fontSize: '16px',
    },
    teams: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    team : {
      fontWeight: '500',
      padding: "2,5px"
    }
  };
});
export default useStyles;