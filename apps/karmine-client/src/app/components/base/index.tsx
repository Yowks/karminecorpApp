import { Footer } from "../footer"
import { Header } from "../header"
import { Layout } from "../layout"
import useStyles from "./styles"

export const Base = () => {
	const { classes } = useStyles()
  return (
    <div>
      <Header />
      <Layout />
      <Footer />
    </div>
  )
}