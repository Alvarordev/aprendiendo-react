/* eslint-disable react/prop-types */
import { EVENTS } from './consts'

function navigate (href) {
    window.history.pushState({}, '', href)
    
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
  }

export default function Link ({ target, to, ...props}) {
    const handleClick = (event) => {

        const isMainEvent = event.button === 0 // primary click
        const isModifiedEvent = event.metakey || event.altKey || event.ctrlKey || event.shiftKey
        const isManagableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManagableEvent && !isModifiedEvent){
            event.preventDefault()
            navigate(to)
        }
    }

    return (
        <a onClick={handleClick} href={to} target={target} {...props} />
    )
}