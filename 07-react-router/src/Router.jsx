import { useEffect, useState } from "react"
import { EVENTS } from "./consts"

// eslint-disable-next-line react/prop-types
export default function Router({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
  
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
      }
    }, [])
  
    const Page = routes.find(({ path }) => {
        if (path === currentPath) return true
    })?.Component
    return Page ? <Page /> : <DefaultComponent />
  }