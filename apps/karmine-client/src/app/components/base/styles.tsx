import { theme } from "apps/karmine-client/src/assets/theme"

export const useStyles = () => {
  return {
    background: {
      backgroundColor: theme().background,
      with: '100vw',
      height: '100vh'
    }
  }
}