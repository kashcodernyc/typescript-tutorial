import { useState, useRef, useEffect } from 'react'

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    // for mutable references specify the appropirate type. for ex number incase of setimeout or setinterval
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
        if(interValRef.current){
            window.clearInterval(interValRef.current)
        }
    }

    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer +1)
        },1000)
        return () => {
            stopTimer()
        }
    },[])

    return(
        <div>
            HookTimer = {timer}
            <button onClick={() => stopTimer()}>stop timer</button>
        </div>
    )
}