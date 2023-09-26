import { Children, useEffect, useState } from "react"
import { EVENTS } from "./consts"
import { match } from 'path-to-regexp'
import { getCurrentPath } from "./utils"

// eslint-disable-next-line react/prop-types
export default function Router({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(getCurrentPath())
  
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(getCurrentPath())
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
  
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
      }
    }, []) 

    const routesFromChildren = Children.map(children, ({ props, type}) => {
        const { name } = type
        const isRoute = name === 'Route'

        return isRoute ? props : null
    })

    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)
  
    let routeParams 

    const Page = routesToUse.find(({ path }) => {
        if (path === currentPath) return true

        // hemos usado path-to-regexp
        // para poder detectar rutas dinamicas como por ejemplo
        // /search/:query <- :query es una ruta dinamica y es guardada aqui para luego hacer un match luego de pasar por un regex
        const matcherUrl = match(path, { decode: decodeURIComponent })
        const matched = matcherUrl(currentPath)
        if (!matched) return false

        // guardar los parametros de la url que eran dinamicos
        // y que hemos extraido del path-to-regexp
        // por ejemplo, si la ruta es /search/:query
        // y la url es /search/javascript
        // matched.params.query === 'javascript'
        routeParams = matched.params
        return true
    })?.Component
    return Page 
        ? <Page routeParams={routeParams} /> 
        : <DefaultComponent routeParams={routeParams} />
  }