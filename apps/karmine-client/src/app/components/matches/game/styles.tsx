import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      maxWidth: '680px',
      margin: "0 auto",
      padding: "0 15px",
      display: 'flex',
      justifyContent: 'flex-start',
      minHeight: "40px",
      alignItems: "center",
      flexDirection: "row",
    },
    gameBar: {
      width: '100%',
      borderTop: `2px solid ${theme.palette.primary.main}`,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      background: theme.palette.secondary.main,
    },
    gameInfo: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    },
    gameLogo: {
      width: '30px', 
      height: "30px", 
      marginRight: "10px",
    },
    gameName: {
      textTransform: 'capitalize',
      fontSize: "16px",
      fontWeight: '500'
    },
    tournamentInfo: {
      marginLeft: "auto",
      color: '#a6a6a6'
    }
  };
});
export default useStyles;