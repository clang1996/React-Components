import React, {useState, useRef} from 'react';
import './App.css'

function App() {
    const [active, setActive] = useState(false)
    const [deltX,setDeltaX]= useState(0)
    const [deltY,setDeltaY]= useState(0)
    const btnRef = useRef(null)
    const onClick = (e) => {
        let {x, y} = btnRef.current.getBoundingClientRect()
        let{clientX,clientY} = e
        let deltaX = clientX - x-10
        let deltaY = clientY - y-10
        setActive(true)
        setDeltaX(deltaX)
        setDeltaY(deltaY)
    }
    const onAnimationEnd =(e)=>{
        setActive(false)
    }
    return (
        <div>
        <button
        className = "btn"
        onClick = {onClick}
        ref = {btnRef}
        >
	        <span className="fuck">123</span>
        {active === true ?<span
            onAnimationEnd = {onAnimationEnd}
            className = "circle"
            style={{left:deltX,top:deltY}}/>:''}
        </button>
    < /div>
)
}
export default App;
