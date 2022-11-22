import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      maxWidth: '680px',
      padding: "0 15px"
    },
    date: {
      color: "#FFFF",
      textTransform: 'capitalize',
      fontWeight: '500',
      fontSize: '14px'
    }
  };
});
export default useStyles;