import { useEffect, useState } from "react"
import { getEvents } from "../../services/events"
import { useStyles } from "./styles"

export const Layout = () => {
  const { test } = useStyles()
  const [value, setValue] = useState('')
	useEffect(() => {
    const fetchData = async () => {
      setValue(await getEvents())
    }
    fetchData()
  }, [value])
  return (
    <>
    {value}
    </>   
  )
}