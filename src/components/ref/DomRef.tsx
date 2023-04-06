import { useRef, useEffect } from 'react'

export const DomRef = () => {
    // for dom references specify the dom element type
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
    
}