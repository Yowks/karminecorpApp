import { Footer } from "../footer"
import { Header } from "../header"
import { Layout } from "../layout"
import { useStyles } from "./styles"

export const Base = () => {
	const { background } = useStyles()
  return (
    <>
      <div style={background}>
        <Header />
        <Layout></Layout>
        <Footer />
      </div>
    </>  
  )
}