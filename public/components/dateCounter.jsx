import { useState } from 'react'

export const DateCounter = () => {
    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)

    const date = new Date("june 21 2027")
    date.setDate(date.getDate() + count)
  return (
    <div>
        <div>
            <input type="range" min='0' max="10" value={step} onChange={(e) => setStep(Number(e.target.value))}/>
            {/* <button onClick={() => setStep(prev => prev - 1)}>-</button> */}
            <span>Step: {step}</span>
            {/* <button onClick={() => setStep(prev => prev + 1)}>+</button> */}
        </div>
        <div>
            <button onClick={() => setCount(prevCount => prevCount - step)}>-</button>
            <span>Count: {count}</span>
            <button onClick={() => setCount(prevCount => prevCount + step)}>+</button>
        </div>
        <p>{ count == 0 ? "today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}{date.toDateString()}</p>
    </div>
  )
}
